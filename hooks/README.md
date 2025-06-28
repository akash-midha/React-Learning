# Hooks

## useEffect Hook

    - useEffect Hook in react is used to perform side effects such as fetching data from API, DOM manipulation, timer events (setTimer , setInterval) in functional components.

    - It allows to run code in response to change in state, props or lifecycle events such as when component is mounted, updated or unmounted.

    - It enables functional components to handle lifecycle methods like componentdidMount, componentdidUpdate and componentwillUnmount.

    - useEffect hook is itself isn't asynchronous, we can use async functions in useEffect.

    - We can use multiple useEffects for a single component and this is often preferred to have multiple useEffect rather than putting all logic to single useEffect.

    - Don't provide unnecessary dependencies to ensure better performance optimization.

#### Basic Syntax

```javascript
useEffect(()=>{
    
}, [dependencies])
```

useEffect Hook take 2 arguments-
1.  Callback function
2.  Dependency array (optional)

The callback function is called if one of the dependency from dependency array has changed, if no dependency array has been provided, it will be called on every render.

If empty array has been provided, it will be called on first render.

#### When useEffect run ?

1. on component mount: When the component is first rendered. (empty array is provided.)
2. on state/props change: When dependencies are provided in dependency array, useEffect is called if one of those dependency change.
3. on component unmount: Cleanup is performed when component is removed from UI. Cleanup is important to avoid memory leaks or undesirable behaviour. Function is returned inside useEffect to perform cleanup.


```javascript
useEffect(()=>{
    const timer = setInterval(()=>{
        console.log('Timer running');
    }, 1000);

    return () => {
        clearInterval(timer);
    }
},[])
```

## useLayoutEffect Hook

useLayoutEffect hook is used to handle side effects that needed to be executed immediately after DOM is mutated and before browser repaints, such as measuring DOM elements or manipulating layout before it is rendered.

Since useLayoutEffect runs before the paint, it can block the rendering process. This can lead to potential performance issues as it may delay the visual update.

useLayoutEffect runs synhronously while useEffect runs synchronously. useEffect doesn't block rendering process while useLayoutEffect does, so considering performance useEffect is mostly used.

# useEffect vs useLayoutEffect in React

| Feature                      | `useEffect`                                              | `useLayoutEffect`                                              |
|-----------------------------|-----------------------------------------------------------|----------------------------------------------------------------|
| 📦 Runs                     | After paint (asynchronous)                               | Before paint, after DOM render (synchronous)                  |
| 🎯 Purpose                  | Side effects that don’t affect layout                     | DOM measurements or layout-related changes                    |
| 🧱 Paint Blocking           | ❌ No – does not block paint                              | ✅ Yes – blocks paint until effect finishes                    |
| ⚙️ Typical Use Cases        | API calls, subscriptions, analytics, logging              | Reading DOM size, position (`getBoundingClientRect`)          |
| 🐢 Performance              | Better for non-critical side effects                      | Can hurt performance if overused                              |
| ⚠️ Visual Flicker Risk      | May cause flicker if updating layout after paint          | No flicker – layout is adjusted before paint                  |
| 🌐 Server-side Rendering    | ✅ Supported in SSR                                       | ❌ Not supported in SSR – ignored                             |
| 🧪 Order of Execution       | After browser paints the screen                           | Immediately after render but before paint                    |
| 💡 Default Recommendation   | Use this by default for most effects                      | Use **only** if you must read/write layout before paint      |


- **✅ Use `useEffect` by default**.
- **⚠️ Use `useLayoutEffect`** only when you need to measure or manipulate the DOM **before paint** to avoid layout shift or flicker.
