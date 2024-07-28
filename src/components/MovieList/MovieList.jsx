import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies = [] }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li className={s.item} key={movie.id}>
            <Link
              className={s.link}
              to={`/movies/${movie.id}`}
              state={location}
            >
              {" "}
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
