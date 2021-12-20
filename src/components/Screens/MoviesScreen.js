import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ScreenHeader from "../Screen components/ScreenHeader";

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
      <ScreenHeader>
        Selecione o filme
      </ScreenHeader>
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