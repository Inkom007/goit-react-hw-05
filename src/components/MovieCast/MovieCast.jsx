import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCastById } from "../../services/api";

const MovieCast = () => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const params = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastById(params.movieId).then((data) => setCast(data));
  }, [params.movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
          />
          <p>
            {actor.name} as {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
