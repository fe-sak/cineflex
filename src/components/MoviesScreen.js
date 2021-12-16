import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function MoviesScreen() {
    const [movies, setMovies] = useState();

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
            .then(serverAnswer => setMovies(serverAnswer.data))
    }, []);

    console.log(movies);

    if (movies === undefined) return <span>Carregando...</span>

    return (
        <div className="MoviesScreenContainer">
            <div className="MoviesScreenHeader">
                <h1>Selecione o filme</h1>
            </div>
            <div className="movies">
                {movies.map((movie) => {
                    return (
                        <Link to={`/sessoes/${movie.id}`} key={movie.id}>
                            <div className="movie" >
                                <img src={movie.posterURL} alt={movie.title} />
                            </div>
                        </Link>

                    )
                })}
            </div>
        </div>
    )
}