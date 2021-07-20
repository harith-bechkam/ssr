import React, { useState, useEffect } from "react";
import axios from 'axios'

function Asd() {
    const [count, setCount] = useState(0);
    const [save, setSave] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => console.log(response.data))
    }, [])
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    const qwemethod = () => {
        console.log("this is console")
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>jhkjkjjh</p>
            <div>
                <h1>
                    my home page
                </h1>
                <p>
                    some content
                </p>
                <button onClick={qwemethod}>button</button>
            </div>

        </>
    );
}

export default Asd;
