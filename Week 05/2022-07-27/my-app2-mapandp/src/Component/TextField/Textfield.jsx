import React, { useState } from "react";

const Textfield = ({ handleChange }) => {
    const handleFormChange = (event) => {
        handleChange(event.target.value);
    };

    return (
        <div>
            <input onChange={handleFormChange} />
        </div>
    );
};

export default Textfield;
