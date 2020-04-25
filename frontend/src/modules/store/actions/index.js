import {
  LOAD_GALLERY,
  SET_CURRENT_POST,
  SET_FILTER_SECTION,
  SET_FILTER_SORT,
  SET_FILTER_VIRAL,
  SET_FILTER_WINDOW,
  ADD_POST,
  SET_GALLERY_ID,
  SET_IMAGE_INDEX,
} from "../constants/action-types";

export function addPost(payload) {
  return { type: ADD_POST, payload };
}
export function loadGallery(payload) {
  return { type: LOAD_GALLERY, payload };
}
export function setCurrentPost(payload) {
  return { type: SET_CURRENT_POST, payload };
}
export function setViral(payload) {
  return { type: SET_FILTER_VIRAL, payload };
}
export function setWindow(payload) {
  return { type: SET_FILTER_WINDOW, payload };
}

export function setSort(payload) {
  return { type: SET_FILTER_SORT, payload };
}

export function setSection(payload) {
  return { type: SET_FILTER_SECTION, payload };
}
export function setGalleryId(payload) {
  return { type: SET_GALLERY_ID, payload };
}
export function setImageIndex(payload) {
  return { type: SET_IMAGE_INDEX, payload };
}
