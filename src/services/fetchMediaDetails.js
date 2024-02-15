import { axios, baseOptions } from "./api";

/**
 * Fetches details of a media (movie or TV show) by its ID.
 * @param {string} media_id - The ID of the media.
 * @param {string} media_type - The type of the media ('movie' or 'tv').
 * @returns {Promise<Object>} A promise that resolves to an object containing the media details.
 */
const fetchMediaDetails = async (media_id, media_type) => {
  const { data } = await axios.get(
    `/${media_type}/${media_id}?language=en-US`,
    baseOptions
  );

  return data;
};

export { fetchMediaDetails };
