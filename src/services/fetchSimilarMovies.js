import { axios, baseOptions } from "./api";

const fetchSimilarMovies = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}/similar`, baseOptions);

  return data;
};

export { fetchSimilarMovies };
