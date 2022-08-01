import React from "react";
import App from "./../../App";
import Form from "./../../Containers/Form/Form";

const Select = ({ selectOptions, placeholder, setSelectState }) => {
    const handleChange = (e) => {
        onchange(e.target.value);
    };

    return (
        <div>
            <select defaultValue={placeholder} onChange={handleChange}>
                <option disabled value={placeholder}></option>
                {selectOptions.map((option) => {
                    return (
                        <option key={option.id} value={option.city}>
                            {option.city}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
