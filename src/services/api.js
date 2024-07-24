import axios from "axios";

const apiUrl =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDBkZDRhNzczYzdkODQ5NjExNjk0MWRjMzQ4ODE5MCIsIm5iZiI6MTcyMTg0NzA3OS4yMzY5MzMsInN1YiI6IjY2YTBlMThlYmZmYjUzNGY4NGUwZDVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F526klJy6I8P5xsWPPp8x9QnDKdjUfyhXtSBrmpiW14";

const fetchMovies = async () => {
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
  return response.data.results;
};

export default fetchMovies;
