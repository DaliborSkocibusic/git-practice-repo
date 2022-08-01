import React, { useState } from "react";
import Textfield from "../../Component/TextField/Textfield";
import Select from "../../Component/Select/Select";

const Form = ({ selectOptions }) => {
    const [textState, setTextState] = useState("");

    const [selectState, setSelectState] = useState("Brisbane");

    console.log(selectOptions)

    return (
        <div>
            <Textfield handleChange={setTextState} />
            <p>Text field state: {textState}</p>
            <Select 
                selectOptions={selectOptions}
                selectValue={selectState}
                placeholder="Please select and option"
                onChange={setSelectState} />
                <p>{selectState}</p>
        </div>
    );
};

export default Form;
