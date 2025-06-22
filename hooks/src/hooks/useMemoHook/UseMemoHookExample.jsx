import { useState, useMemo } from 'react';

const useMemoHookExample = () => {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    const double = useMemo(() => {
        console.log('Expensive calculation is doene');
        for (let i = 0; i < 1000000; i++) {

        }
        return count * 2;
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Double: {double}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>

            <p>Other: {other}</p>
            <button onClick={() => setOther(other + 1)}>Increase Other</button>
        </div>
    );
};

export default useMemoHookExample;
