import { axios, baseOptions } from "./api";

/**
 * Fetches trending data for movies and TV shows.
 * @param {number} [page=1] - The page number of the trending data (default is 1).
 * @returns {Promise<Object>} A promise that resolves to an object containing trending data.
 */
const fetchTrendingData = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/all/day?language=en-US&page=${page}`,
    baseOptions
  );

  return data;
};

export { fetchTrendingData };
