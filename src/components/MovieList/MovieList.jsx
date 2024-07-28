import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies = [] }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link className={s.link} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
