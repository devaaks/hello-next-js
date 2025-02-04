"use client"
import { useState } from "react";

export const Counter = () => {
    console.log("Counter Component!");
    const [count, setCount] = useState(0);

    return (
        <div className="mb-4">
            <h1 className="text-2xl font-bold"> Counter Component!</h1>
            <p className="my-4 text-lg">Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Increment
            </button>
        </div>
    );
};