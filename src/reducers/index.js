import { combineReducers } from "redux";

import imageReducer from "./imageReducer";
import imageLoadReducer from "./imageLoadReducer";
import imageErrorReducer from "./imageErrorReducer";
import pageNumberReducer from "./pageNumberReducer";
import statsReducer from "./statsReducer";

const rootReducer = combineReducers({
  images: imageReducer,
  images_loading: imageLoadReducer,
  images_error: imageErrorReducer,
  pageNumber: pageNumberReducer,
  stats: statsReducer
});

export default rootReducer;
