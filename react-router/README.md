# Interview Questions on Routing

#### Can you explain what React Router is and why we use it in React applications?

React Router is a standard library for routing in React. It enables navigation among views or components in a React application by keeping the UI in sync with the URL. It allows developers to implement client-side routing — meaning page transitions happen without a full page reload, improving performance and user experience.


#### How to handle routing in react application?

Routes in React Router are handled using the <Routes> and <Route> components. Each <Route> maps a path to a React element, allowing navigation based on the URL.

#### What is the purpose of the Route and Routes components in React Router v6+? How do they differ from React Router v5?

Routes: It is a wrapper component introduced in React v6. It replaces the old switch component. It looks through its all children <Route> elements and renders only first one that matches the current location.

Route: represents mapping with the URL path and component to render. In v6 it requires element prop (earlier component prop was used)

| Feature                 | React Router v5                             | React Router v6                               |
| ----------------------- | ------------------------------------------- | --------------------------------------------- |
| Wrapper component       | `<Switch>`                                  | `<Routes>`                                    |
| Route element syntax    | `<Route path="/about" component={About} />` | `<Route path="/about" element={<About />} />` |
| No nested routes inside | Routes not nested inside each Route         | Fully supports **nested routes** directly     |

#### How does nested routing work in react router v6?

Nested routing can be achieved using routes and route, where router is wrapper and each route maps the element with the url.

```js
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Phones from './Phones';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />}/>
</Routes>

```

#### What is outlet in react-router dom and how it is used to implement nested routing ?

Outlet is a placeholder component in react router used to render child elements in nested routing

```js
<Routes>
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
</Routes>

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
```

#### What is diff b/w <Link/> and <NavLink/> ?

Link is used to navigate between routes without reloading the page . It's basic routing component used for navigation.
NavLink does everything what Link does , plus it provides the ability to style the active link (based on whether the current URLmatches the link ).
It exposes the props such as isActive.

```js
<NavLink 
  to="/about" 
  className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-500"}
>
  About
</NavLink>

```


#### What is useNavigate() in React Router, and how is it used? Give a basic example.

useNavigate() is a React Router hook that lets navigate to different routes from inside a component — without clicking a link. It's commonly used after events like form submissions, button clicks, or conditional logic.

```js
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // do auth check...
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}

```

navigate(-1) → goes back in history (like back button)
navigate('/home', { replace: true }) → This is useful when you don’t want the user to go back to the redirecting page using the browser back button.

#### What is useParams() in React Router, and how is it used? Give a basic example.

useParams() is a React Router hook that lets to access route parameters (dynamic segments in the URL).

```js
<Route path="/user/:id" element={<User />} />


import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

#### What is dynamic routing , how can we achieve it?

Dynamic routing means the route path contains a variable (like an ID or username). It lets to load different content based on the URL parameter — useful for user profiles, product pages, etc.

We can use colon : to define dynamic segment in route. Then in .jsx file we can accesss the dynamic value using useParams()

#### How would you implement a 404 “Not Found” page using React Router v6?

define a route with path "*" at the end of your routes. 

```js
 <Route path="*" element={<NotFound />} />
```

#### How to Manage Protected Routes?

Protected Routes (or private routes) are used to restrict access to certain pages unless the user is authenticated.

We typically create a wrapper component that checks auth status an either:
✅ renders the desired route if logged in, or
❌ redirects to /login (or another page) if not authenticated.

```js

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const isLoggedIn = false; // 🔒 change to true to simulate login


        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />
          }


```

#### What is RBAC ?

Routing RBAC (Role-Based Access Control) is a pattern used to restrict or allow access to routes based on the user's role (like admin, user, guest).


#### How does lazy loading work in React Router?

Lazy loading means deferring the loading of components until they're needed — which helps improve initial load time.In React Router, we can use React.lazy() with Suspense to load routes only when accessed.

```js
import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}

```


#### What is the difference between <BrowserRouter> and <HashRouter> in React Router?

<BrowserRouter> uses the HTML5 History API (pushState, replaceState) to keep your UI in sync with the URL. It provides clean URLs like /about or /user/123 and is the most commonly used router in modern web apps.

<HashRouter>, on the other hand, uses the URL hash (#) portion to simulate a different path, e.g., /#/about. It's useful in environments where you can't configure server-side support for client-side routing (e.g., static file hosting like GitHub Pages).

✅ Use BrowserRouter if your server is configured to serve the same HTML file for all routes.
✅ Use HashRouter if you can't control the server, like on GitHub Pages.