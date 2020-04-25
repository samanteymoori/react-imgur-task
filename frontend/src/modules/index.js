import store from "./store/index"
import { loadGallery } from "./store/actions/index";

window.store = store;
window.loadGallery = loadGallery;