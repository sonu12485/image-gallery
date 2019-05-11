import axios from "axios";

import { URL, KEY } from "../constants";

const fetchStats = async id => {
  const res = await axios.get(
    `${URL}/photos/${id}/statistics?client_id=${KEY}`
  );

  console.log(res);

  if (res.status >= 400) {
    throw new Error(res.error);
  } else {
    return res.data;
  }
};

export default fetchStats;
