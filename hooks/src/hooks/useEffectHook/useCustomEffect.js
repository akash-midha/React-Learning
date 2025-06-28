import { useRef } from "react";

const areEqaul = (arr1, arr2) => {
    if (arr1 == null && arr2 == null) {
        return true;
    }
    if (arr1 == null || arr2 == null) {
        return false;
    }
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}


const useCustomeffect = (cb, deps) => {

    //calling the func on first render only
    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);

    if (isFirstRender.current) {
        isFirstRender.current = false;
        cb();
        return;
    }

    //calling when deps change
    const depsChanged = deps ? !areEqaul(deps, prevDeps.current) : true;
    if (depsChanged) {
        cb();
    }

    if (deps) {
        prevDeps.current = deps;
    }
    else {
        prevDeps.current = [];
    }


    //cleanup or unmounting
}

export default useCustomeffect;