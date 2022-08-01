import logo from "./logo.svg";
import "./App.css";
import Box from "./Component/Box/Box";
import Quantity from "./Component/Quantity/Quantity";
import Form from "./Containers/Form/Form";
import Textfield from "./Component/TextField/Textfield";
import Select from "./Component/Select/Select";
import TaskCard from "./Component/TaskCard/TaskCard";

import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const taskData = [
        { task: "Clean the bathroom", priority: "low" },
        { task: "Walk the dog", priority: "high" },
        { task: "Do codewars", priority: "very high" },
        { task: "Cook dinner", priority: "medium" },
    ];

    let countTwo = 0;

    const [tasks, setTasks] = useState(taskData);

    const increment = () => {
        console.log("Increment function was called");
    };

    const decrement = () => {
        console.log("Decrement function was called");
    };

    const selectOptions = [
        { city: "Melbourne, id: 1" },
        { city: "Sydney, id: 2" },
        { city: "Brisbane, id: 3" },
        { city: "Adelaide, id: 4" },
    ];

    return (
        <div className="App">
            <h1>Functions as Props</h1>
            <Quantity count={count} handleCount={setCount} />
            {/* <p>{count}</p> */}
            <p>{countTwo}</p>
            <button onClick={increment}>Increment</button>
            <Form selectOptions={selectOptions} />
            {tasks.map((task, i) => {
                return (
                    <TaskCard
                        key={i}
                        taskName={task.task}
                        priority={task.priority}
                        deleteTask={setTasks}
                        stateArr={tasks}
                    />
                );
            })}
        </div>
    );
}

export default App;
