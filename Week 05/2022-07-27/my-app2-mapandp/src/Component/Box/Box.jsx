import React from "react";

const Box = ({ handleIncrement, handleDecrement }) => {
    return (
        <div>
            <button onClick={handleIncrement}>Add 1</button>
            <button onClick={handleDecrement}>Minus 1</button>
        </div>
    );
};

export default Box;
