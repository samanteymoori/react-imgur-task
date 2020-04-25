import { instance } from "../utility/apiclient.js";

export function gallery(galleryId = 0, section, sort, window, showViral) {
  return instance.post("/gallery", {
    galleryId,
    section,
    sort,
    window,
    showViral,
  });
}
