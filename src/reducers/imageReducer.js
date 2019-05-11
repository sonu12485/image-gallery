import { IMAGES } from "../constants";

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      const newState = [...state, action.payload];
      return newState;

    default:
      return state;
  }
};

export default imageReducer;
