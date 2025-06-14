
import { useState } from 'react';

export default function Counter() {
    let [count, setCount] = useState(0);

    function increase() {
        setCount (count + 1);
        console.log(count);
    }

    function dicrease() {
        setCount (count - 1);
        console.log(count);
    }

    return (
        <>
            <h3>Count = {count} </h3>
            <span>
                      <button onClick={increase}>Counter+</button>
            <button onClick={dicrease}>Counter-</button>
            </span>
      

        </>
    )
}


















