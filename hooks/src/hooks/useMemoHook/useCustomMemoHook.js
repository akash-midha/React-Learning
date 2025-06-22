// here is the polyfill for useMemo Hook
import { useEffect, useRef } from "react";
import isEqual from 'lodash.isEqual';

const areEqual = (arr1, arr2) => {
    if (arr1 == null && arr2 == null) return true;
    if (arr1 == null || arr2 == null) return false;
    if (arr1.length != arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {  // for deep comparison we can use isEqual(arr1[i], arr2[i]) , isEqual imported from lodash
            return false;
        }
    }
    return true;
}

const useCustomMemoHook = (cb, deps) => {
    // storing the cached value
    const memoizedRef = useRef(null);

    // comparing changes
    if (!memoizedRef.current || !areEqual(deps, memoizedRef.current.deps)) {
        memoizedRef.current = {
            value: cb(),
            deps
        }
    }

    // cleanup logic  (React’s built-in useMemo does not reset the memo on unmount, and there’s rarely a need for that unless you’re caching something very memory-intensive.)
    useEffect(() => {
        return () => {
            memoizedRef.current = null;
        }
    }, [])

    // returning cached value
    return memoizedRef.current.value;
}

export default useCustomMemoHook;