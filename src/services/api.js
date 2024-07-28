import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDBkZDRhNzczYzdkODQ5NjExNjk0MWRjMzQ4ODE5MCIsIm5iZiI6MTcyMTg0NzA3OS4yMzY5MzMsInN1YiI6IjY2YTBlMThlYmZmYjUzNGY4NGUwZDVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F526klJy6I8P5xsWPPp8x9QnDKdjUfyhXtSBrmpiW14";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
  return response.data.results;
};

export const fetchSearchMovies = async (searchValue) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      params: {
        query: searchValue,
      },
    }
  );
  return response.data.results;
};

export const fetchMoviesById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US `,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data;
};

export const fetchCastById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data.cast;
};

export const fetchReviewsById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data;
};
