import React, { Component } from "react";
import store from "./../../modules/store/index";
import { loadGallery, setGalleryId } from "./../../modules/store/actions/index";
import { gallery } from "./../../services/galleryService";
import GalleryGrid from "./galleryGrid.jsx";
import GalleryModal from "./galleryModal.jsx";

import GalleryFilters from "./galleryFilters.jsx";
class Gallery extends Component {
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      if (state.loadGallery) this.fetchGallery(state);
    });
    store.dispatch(setGalleryId(0));
  }
  fetchGallery(state) {
    this._asyncRequest = gallery(
      state.galleryId,
      state.section,
      state.sort,
      state.window,
      state.showViral
    ).then((result) => {
      this._asyncRequest = null;
      store.dispatch(loadGallery(result.data.gallery.data));
    });
  }
  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }
  render() {
    return (
      <div className="container">
        <GalleryFilters />

        <GalleryGrid />

        <GalleryModal />
      </div>
    );
  }
}

export default Gallery;
