import React from "react";
import style from "./Quantity.module.scss"

const Quantity = ({ count, handleCount }) => {
    const handleIncrement = () => {
        handleCount(count + 1);
    };

    const handleDecrement = () => {
        handleCount(count - 1);
    };

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default Quantity;
