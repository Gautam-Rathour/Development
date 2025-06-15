
import { useState } from 'react';

function init() {
    console.log("init was executed");
    return Math.random();
}

export default function Counter() {
    let [count, setCount] = useState(init); //initialization
    console.log("component was re-rendered");
  

    function increase() {
        setCount ((currCount) => {
            return currCount + 1;
        });
        // setCount ((currCount) => {
        //     return currCount + 1;
        // });
        // setCount(25);
    }

    return (
        <>
           
        </>
    )
}


















