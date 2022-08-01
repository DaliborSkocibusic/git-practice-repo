import logo from "./logo.svg";
import "./App.css";
import Element from "./Element";
import { useEffect } from "react";

let myFetch = "https://icanhazdadjoke.com/";
let input = "hello";
async function fetchUser(url) {
    const response = await fetch(
        `https://icanhazdadjoke.com/search?term=${input}&limit=3`,
        {
            headers: {
                Accept: "application/json",
            },
        },
    );

    const data = await response.json();

    let results = [];

    if (data) {
        for (let i = 0; i < data.results.length; i++) {
            results[i] = data.results[i].joke;
            document.getElementsByClassName("Element").innerHTML =
                results[i].joke;
        }
    }
    return results;
}

const randomJokes = async (n = 3) => {
    const range = new Array(n).fill(null);
    
    
    const promises = range.map(async () => {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        });
        return await res.json();
    });

    return await Promise.all(promises);
};
const searchJokes = (query, n = 3) => {};

const SearchJokes = ({initialValue ="", onSubmit}) => {
  reutrn (<form>
    <input value={internal, setInternal(e.target.value)}/>
    <button>Search</button>
  </form>)
}

let value = fetchUser(myFetch);
function App() {
   
  // const [search, setSearch] = useState("");
  //   const firstMount = useRef(true);
  //   const [jokes, setJokes] = useState([]);

  //   useEffect(() => {

  //     if (firstMount.current === true) {
  //       firstMount.current = false;
  //       return;
  //     }
  //       if (search === "") {

  //         randomJokes().then((fetchedJokes) => setJokes(fetchedJokes));

  //       }
  //   }, [search]);

//   return (
//     <div>
//       jokes.map((joke) => (<p key={joke.id}{joke.joke}></p>))
      
//   </div>);
// }

export default App;
