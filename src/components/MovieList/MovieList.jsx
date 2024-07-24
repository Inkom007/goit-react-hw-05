import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMovies from "/src/services/api.js";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h3>Trending today</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
