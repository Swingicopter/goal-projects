import React, { useState } from "react";

let root = document.body

let [count, setCount] = useState(0)

function counter() {
    let count = 0

    function add() {
        count ++
    }

    function subtract() {
        if (count > 0) {
            count -= 1
        }
    }

    function multiply() {
        count *= 2
    }

    function divide() {
        if (count >= 2) {
            count /= 2
        }
    }

    return (
    <div>
        <h1>{count}</h1>
        <br />
        <button onClick={add}>+1</button>
        <button onClick={multiply}>*2</button>
        <button onClick={divide}>/2</button>
        <button onClick={subtract}>-1</button>
    </div>
)
};

root.render(counter())

export default counter;