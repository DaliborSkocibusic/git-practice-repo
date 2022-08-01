import styles from "./App.module.scss";
import CardList from "./containers/CardList";
import react, { useState } from "react";

// What are props?
// Props stands for properties, a way to pass data from a parnet component to a chaild component

// Uni-directional flow of data, we pass props from the parent to the chold, not the other way around

function App() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState(0);
    const [color, setColor] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
        setMsg(count > 5 ? "get hihg" : "wow low");
    }

    function handleDecrement() {
        setCount(count - 1);
        setMsg(count > 5 ? "get hihg" : "wow low");
    }

    const handleColor = () => {
        setColor((color = "red"));
        console.log(color);
    };

    return (
        <div className={styles.App}>
            <h1>State Demonstration</h1>
            <p>
                Count is {count} {msg}
            </p>
            <button
                onClick={() => {
                    handleIncrement();
                    handleColor();
                }}>
                Increment
            </button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default App;
