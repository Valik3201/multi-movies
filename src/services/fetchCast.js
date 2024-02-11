import { axios, baseOptions } from "./api";

const fetchCast = async (media_id, mediaType) => {
  const { data } = await axios.get(
    `/${mediaType}/${media_id}/credits?language=en-US`,
    baseOptions
  );

  return data.cast;
};

export { fetchCast };
