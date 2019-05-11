import { STATS } from "../constants";

const statsLoaded = (id, stats) => {
  return {
    type: STATS.LOADED,
    payload: {
      id,
      stats
    }
  };
};

export { statsLoaded };
