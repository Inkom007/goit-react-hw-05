import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";

const MovieDetailsPage = () => {
  const params = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesById(params.movieId).then((data) => setMovie(data));
  }, [params.movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getUTCFullYear()
    : "N/A";

  const genres = movie.genres
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "N/A";

  const score = movie.vote_average
    ? (movie.vote_average * 10).toFixed(0)
    : "N/A";

  return (
    <div>
      <img src={posterUrl} alt={movie.title} />
      <h2>
        {movie.title}({releaseYear})
      </h2>
      <p>User Score: {score}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
