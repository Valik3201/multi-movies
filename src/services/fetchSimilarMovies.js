import { axios, baseOptions } from "./api";

const fetchSimilarMovies = async (media_id, mediaType) => {
  const { data } = await axios.get(
    `/${mediaType}/${media_id}/similar`,
    baseOptions
  );

  return data;
};

export { fetchSimilarMovies };
