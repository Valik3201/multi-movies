import { axios, baseOptions } from "./api";

/**
 * Searches for movies based on the provided query parameters.
 * @param {Object} queryParams - The query parameters for the movie search.
 * @param {string} queryParams.query - The search query.
 * @param {boolean} [queryParams.include_adult=false] - Whether to include adult content (default is false).
 * @param {string} [queryParams.language="en-US"] - The language of the search results (default is "en-US").
 * @param {string} [queryParams.primary_release_year=""] - The primary release year of the movies to search for.
 * @param {number} [queryParams.page=1] - The page number of the search results (default is 1).
 * @param {string} [queryParams.region=""] - The region to filter the search results by.
 * @param {string} [queryParams.year=""] - The year of release of the movies to search for.
 * @returns {Promise<Object>} A promise that resolves to an object containing search results.
 */
const searchMovies = async (queryParams) => {
  const options = {
    ...baseOptions,
    params: {
      query: queryParams.query,
      include_adult: queryParams.include_adult || false,
      language: queryParams.language || "en-US",
      primary_release_year: queryParams.primary_release_year || "",
      page: queryParams.page || 1,
      region: queryParams.region || "",
      year: queryParams.year || "",
    },
  };

  const { data } = await axios.get("/search/movie", options);

  return data;
};

export { searchMovies };
