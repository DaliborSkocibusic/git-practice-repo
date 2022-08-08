import logo from "./logo.svg";
import "./App.css";
import { getMovies } from "./services/movies";
import { useEffect, useState } from "react";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const movies = await getMovies();
            setMovies(movies);
        };

        wrapper();
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>
                        {movie.name} ({movie.releaseYear})
                    </h2>
                    <p>{movie.cast}</p>
                    <p>{movie.dirctor}</p>
                </div>
            ))}
            ;
        </div>
    );
}

export default App;