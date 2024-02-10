import { axios, baseOptions } from './api';

const fetchCast = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/credits?language=en-US`,
    baseOptions
  );

  return data.cast;
};

export { fetchCast };
