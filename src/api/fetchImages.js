import axios from "axios";

import { URL, KEY } from "../constants";

const fetchImages = async pageNumber => {
  const res = await axios.get(
    `${URL}/photos?client_id=${KEY}&page=${pageNumber}&per_page=5`
  );

  if (res.status >= 400) {
    throw new Error(res.error);
  } else {
    return res.data;
  }
};

export default fetchImages;
