const IMAGES = {
  LOAD: "IMAGES_LOAD",
  LOAD_SUCCESS: "IMAGES_LOAD_SUCCESS",
  LOAD_FAIL: "IMAGES_LOAD_FAIL"
};

const STATS = {
  LOADED: "STATS_LOADED"
};

const URL = "https://api.unsplash.com";
const KEY = process.env.API_KEY;

export { IMAGES, STATS, URL, KEY };
