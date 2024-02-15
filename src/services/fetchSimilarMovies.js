import { axios, baseOptions } from "./api";

/**
 * Fetches similar movies or TV shows for a media by its ID.
 * @param {string} media_id - The ID of the media.
 * @param {string} mediaType - The type of the media ('movie' or 'tv').
 * @returns {Promise<Object>} A promise that resolves to an object containing similar movies or TV shows.
 */
const fetchSimilarMovies = async (media_id, mediaType) => {
  const { data } = await axios.get(
    `/${mediaType}/${media_id}/similar`,
    baseOptions
  );

  return data;
};

export { fetchSimilarMovies };
