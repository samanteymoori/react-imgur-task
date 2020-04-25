import store from "./store/index";
import {
  loadGallery,
  setCurrentPost,
  setSection,
  setSort,
  setViral,
  setWindow,
  addPost,
  setGalleryId,
} from "./store/actions/index";

window.store = store;
window.loadGallery = loadGallery;
window.setCurrentPost = setCurrentPost;
window.setSection = setSection;
window.setSort = setSort;
window.setViral = setViral;
window.setWindow = setWindow;
window.addPost = addPost;
window.setGalleryId = setGalleryId;
