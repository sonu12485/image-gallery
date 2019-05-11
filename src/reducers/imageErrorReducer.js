import { IMAGES } from "../constants";

const imageErrorReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES.LOAD_FAIL:
      return action.payload;

    default:
      return state;
  }
};

export default imageErrorReducer;
