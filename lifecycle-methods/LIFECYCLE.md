# 🧬 React Lifecycle Methods

Lifecycle methods in React are special functions called at different stages of a component’s life: **creation**, **update**, and **destruction**.

---

## 📚 Class Component Lifecycle Phases

React class components go through **three main phases**:

### 🔹 1. Mounting (Component is created and added to the DOM)

| Method                         | Description                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| `constructor()`                | Initializes state and binds methods.                                       |
| `static getDerivedStateFromProps()` | Updates state based on props before rendering.                       |
| `render()`                     | Returns JSX to render UI.                                                  |
| `componentDidMount()`          | Called once after the component is mounted. Best for API calls or setup.  |

---

### 🔹 2. Updating (Component re-renders due to state/prop changes)

| Method                         | Description                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| `static getDerivedStateFromProps()` | Invoked again before render if props change.                        |
| `shouldComponentUpdate()`      | Determines if re-render is needed (for performance).                       |
| `render()`                     | Returns updated JSX.                                                       |
| `getSnapshotBeforeUpdate()`    | Captures values (e.g. scroll position) before DOM changes.                 |
| `componentDidUpdate()`         | Called after DOM updates. Best for DOM ops or network calls based on change.|

---

### 🔹 3. Unmounting (Component is removed from the DOM)

| Method                | Description                                             |
|-----------------------|---------------------------------------------------------|
| `componentWillUnmount()` | Cleanup logic (e.g., removing listeners, canceling timers). |

---

## ⚛️ Functional Components with Hooks

React Hooks handle lifecycle logic in function components.

### 🔹 `useEffect()` = Multi-purpose lifecycle handler

```js
useEffect(() => {
  // componentDidMount + componentDidUpdate logic

  return () => {
    // componentWillUnmount logic (cleanup)
  };
}, [dependencies]); // Runs on mount + any dependency change
```



## Class Component

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

```


## Functional Component


```js
import { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or updated");

    return () => {
      console.log("Cleanup before unmounting");
    };
  }, [count]); // Runs on mount and whenever `count` changes

  return <div>{count}</div>;
}
```

## Summary

| Phase      | Class Component          | Functional Component Equivalent            |
| ---------- | ------------------------ | ------------------------------------------ |
| Mounting   | `componentDidMount()`    | `useEffect(() => {}, [])`                  |
| Updating   | `componentDidUpdate()`   | `useEffect(() => {}, [dep])`               |
| Unmounting | `componentWillUnmount()` | `useEffect(() => { return () => {} }, [])` |
