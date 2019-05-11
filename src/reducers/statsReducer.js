import { STATS } from "../constants";

const statsReducer = (state = null, action) => {
  switch (action.type) {
    case STATS.LOADED:
      const newState = {
        ...state,
        [action.payload.id]: action.payload.stats
      };
      return newState;

    default:
      return state;
  }
};

export default statsReducer;
