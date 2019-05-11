import { IMAGES } from "../constants";

const loadImages = () => {
  return {
    type: IMAGES.LOAD
  };
};

const loadImagesSuccess = newImages => {
  return {
    type: IMAGES.LOAD_SUCCESS,
    payload: newImages
  };
};

const loadImagesError = error => {
  return {
    type: IMAGES.LOAD_FAIL,
    payload: error
  };
};

export { loadImages, loadImagesError, loadImagesSuccess };
