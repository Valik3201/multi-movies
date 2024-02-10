import { axios, baseOptions } from "./api";

const fetchTrendingData = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/movie/day?language=en-US&page=${page}`,
    baseOptions
  );

  return data;
};

export { fetchTrendingData };
