# Hooks

## UseMemo Hook

UseMemo Hook is used to memoize expensive calculations or function results so that they are only recomputed only when their dependencies change, thus improving performance.

```javascript
const memoizedResult = useMemo(()=> computeExpensiveFunction(a,b), [a,b]);
```

useMemo takes 2 arguments:
1.  Function which computes value
2.  Dependency array


Ques. **Can you explain a scenario where using useMemo would improve performance in a React component?**

Ans. useMemo Hook is used to memoize expensive calculations so that they are not calculated / executed everytime for same dependencies.

For example, if a component has function that performs heavy calculation (like filtering large dataset or sorting) and this result doesn't need to change unless certain inputs change.

Thus useMemo can help by caching the result.


Ques. **Can you  describe what might happen if you used useMemo incorrectly or unnecessarily?**

Ans. Using useMemo unnecessarily on cheap or fast operations can actually add complexity without any bnefits or even hurt performance due to cost of maintaining the memoization itself.

🔄 React 19 automatically memoizes pure computations in JSX.
With React 19's compiler optimizations (especially in conjunction with the new React Compiler / React Forget), we can often skip writing useMemo manually.
