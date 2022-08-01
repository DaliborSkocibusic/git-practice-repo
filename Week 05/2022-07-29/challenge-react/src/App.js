import logo from "./logo.svg";
import "./App.css";
import CardList from "./CardList/CardList";

const fetchUsers = async (qty = 10) => {
    const res = await fetch(`https://randomuser.me/api?results=${qty}`);
    const data = await res.json();
    console.log(data);
    return data.results;
};


        // const JsonOBJ = await fetch("https://icanhazdadjoke.com/", {
        //     headers: { Accept: "application/json" },
        // }).then((x) => x.json());



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CardList />
            </header>
        </div>
    );
}

export default App;
