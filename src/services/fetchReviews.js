import { axios, baseOptions } from './api';

const fetchReviews = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/reviews?language=en-US`,
    baseOptions
  );

  return data.results;
};

export { fetchReviews };
