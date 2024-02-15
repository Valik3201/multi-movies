import { axios, baseOptions } from "./api";

/**
 * Fetches the cast for a media (movie or TV show) by its ID.
 * @param {string} media_id - The ID of the media.
 * @param {string} mediaType - The type of the media ('movie' or 'tv').
 * @returns {Promise<Array>} A promise that resolves to an array containing the cast information.
 */
const fetchCast = async (media_id, mediaType) => {
  const { data } = await axios.get(
    `/${mediaType}/${media_id}/credits?language=en-US`,
    baseOptions
  );

  return data.cast;
};

export { fetchCast };
