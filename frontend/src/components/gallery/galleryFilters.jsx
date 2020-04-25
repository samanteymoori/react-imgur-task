import React from "react";
import { connect } from "react-redux";

import { Clock, Grid, List } from "react-feather";
import store from "./../../modules/store/index";
import {
  setSort,
  setSection,
  setViral,
  setWindow,
} from "../../modules/store/actions/index";
const mapStateToProps = (state) => {
  return { state };
};

const ConnectedGalleryFilters = ({ state }) => {
  const allPostColor =
    state.showViral === "true"
      ? "btn btn-success btn-sm"
      : "btn btn-secondary btn-sm";
  const exceptViralColor =
    state.showViral === "false"
      ? "btn btn-success btn-sm"
      : "btn btn-secondary btn-sm";
  const rising =
    state.section === "user" ? (
      <a
        className="dropdown-item"
        href="/#"
        onClick={(e) => store.dispatch(setSort("rising"))}
      >
        Rising
      </a>
    ) : (
      <React.Fragment />
    );
  const sectionItems = state.filterBaseData.section.map((section, i) => {
    return (
      <a
        key={i}
        className="dropdown-item"
        href="/#"
        onClick={(e) => store.dispatch(setSection(section.value))}
      >
        {section.title}
      </a>
    );
  });
  const windowItems = state.filterBaseData.window.map((window, i) => {
    return (
      <a
        key={i}
        className="dropdown-item"
        href="/#"
        onClick={(e) => store.dispatch(setWindow(window.value))}
      >
        {window.title}
      </a>
    );
  });
  const sortItems = state.filterBaseData.sort.map((sort, i) => {
    return (
      <a
        key={i}
        className="dropdown-item"
        href="/#"
        onClick={(e) => store.dispatch(setSort(sort.value))}
      >
        {sort.title}
      </a>
    );
  });
  return (
    <React.Fragment>
      <div className="row">
        <div
          className="btn-group btn-group-sm mt-4 col-md-4 text-left"
          style={{ margin: "0 auto" }}
          role="group"
          aria-label="Large button group"
        >
          <button
            type="button"
            onClick={(e) => store.dispatch(setViral("true"))}
            className={allPostColor}
          >
            All Posts
          </button>
          <button
            type="button"
            onClick={(e) => store.dispatch(setViral("false"))}
            className={exceptViralColor}
          >
            Exclude Virals
          </button>
        </div>
        <div className="col-md-2  col-xs-6"></div>
        <div className="dropdown mt-4 col-xs-6 col-md-2" title="Section">
          <button
            className="btn  w-100 btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Grid /> {state.section.toUpperCase()}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {sectionItems}
          </div>
        </div>
        <div className="dropdown  mt-4 col-xs-6 col-md-2" title="Sort">
          <button
            className="btn  w-100 btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <List /> {state.sort.toUpperCase()}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            {sortItems}
            {rising}
          </div>
        </div>
        <div className="dropdown  mt-4 col-xs-6 col-md-2" title="Window">
          <button
            className="btn  w-100 left-align btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton3"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Clock /> {state.window.toUpperCase()}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
            {windowItems}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const GalleryFilters = connect(mapStateToProps)(ConnectedGalleryFilters);

export default GalleryFilters;
