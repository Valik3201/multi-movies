import { axios, baseOptions } from './api';

const fetchMovieDetails = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}?language=en-US`,
    baseOptions
  );

  return data;
};

export { fetchMovieDetails };
