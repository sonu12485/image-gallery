import { IMAGES } from "../constants";

const pageNumberReducer = (state = 1, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      const newState = state + 1;
      return newState;

    default:
      return state;
  }
};

export default pageNumberReducer;
