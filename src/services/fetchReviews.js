import { axios, baseOptions } from "./api";

const fetchReviews = async (media_id, mediaType) => {
  const { data } = await axios.get(
    `/${mediaType}/${media_id}/reviews?language=en-US`,
    baseOptions
  );

  return data.results;
};

export { fetchReviews };
