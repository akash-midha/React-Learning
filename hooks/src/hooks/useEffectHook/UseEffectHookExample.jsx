import { useEffect, useState } from "react"
import useCustomeffect from "./useCustomEffect";

const UseEffectHookExample = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useCustomeffect(() => {
        'This is first render';
    }, [])

    const increaseCount1 = () => {
        setCount1(count1 + 1);
    }
    const increaseCount2 = () => {
        setCount2(count2 + 1);
    }
    return <div>
        <p>Count1 value is {count1}</p>
        <button onClick={increaseCount1}>Increase Count1</button>
        <p>Count2 value is {count2}</p>
        <button onClick={increaseCount2}>Increase Count2</button>
    </div>
}

export default UseEffectHookExample;