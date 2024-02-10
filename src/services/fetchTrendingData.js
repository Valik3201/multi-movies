import { axios, baseOptions } from './api';

const fetchTrendingData = async () => {
  const { data } = await axios.get(
    '/trending/movie/day?language=en-US',
    baseOptions
  );

  return data.results;
};

export { fetchTrendingData };
