import { axios, baseOptions } from "./api";

const fetchMediaDetails = async (media_id, media_type) => {
  const { data } = await axios.get(
    `/${media_type}/${media_id}?language=en-US`,
    baseOptions
  );

  return data;
};

export { fetchMediaDetails };
