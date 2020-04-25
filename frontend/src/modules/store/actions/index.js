import { LOAD_GALLERY } from "../constants/action-types";

export function loadGallery(payload) {
  return { type: LOAD_GALLERY, payload };
}