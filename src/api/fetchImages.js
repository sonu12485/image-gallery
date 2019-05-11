import axios from "axios";

const URL = "https://api.unsplash.com";
const KEY = process.env.API_KEY;

const fetchImages = async pageNumber => {
  const res = await axios.get(
    `${URL}/photos?client_id=${KEY}&page=${pageNumber}&per_page=5&order_by=popular`
  );

  if (res.status >= 400) {
    throw new Error(res.error);
  } else {
    return res.data;
  }
};

export default fetchImages;
