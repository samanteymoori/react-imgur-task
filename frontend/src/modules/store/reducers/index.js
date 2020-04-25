import {
  LOAD_GALLERY,
  SET_CURRENT_POST,
  SET_FILTER_SECTION,
  SET_FILTER_SORT,
  SET_FILTER_VIRAL,
  SET_FILTER_WINDOW,
  SET_GALLERY_ID,
  ADD_POST,
} from "../constants/action-types";

const initialState = {
  currentGallery: null,
  currentPost: null,
  filterBaseData: {
    section: [
      { title: "Hot", value: "hot" },
      { title: "Top", value: "top" },
      { title: "User", value: "user" },
    ],
    sort: [
      { title: "Viral", value: "viral" },
      { title: "Top", value: "top" },
      { title: "Time", value: "time" },
    ],
    window: [
      { title: "Day", value: "day" },
      { title: "Week", value: "week" },
      { title: "Month", value: "month" },
      { title: "Year", value: "year" },
      { title: "All", value: "all" },
    ],
  },
  loadGallery: true,
  galleryId: 0,
  section: "hot",
  sort: "viral",
  window: "day",
  showViral: "true",
};

function rootReducer(state = initialState, action) {
  if (action.type === LOAD_GALLERY) {
    return Object.assign({}, state, {
      currentGallery: action.payload,
      loadGallery: false,
    });
  } else if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      currentGallery: state.currentGallery.concat(action.payload),
      loadGallery: true,
    });
  } else if (action.type === SET_CURRENT_POST) {
    return Object.assign({}, state, {
      currentPost: action.payload,
    });
  } else if (action.type === SET_FILTER_SECTION) {
    return Object.assign({}, state, {
      section: action.payload,
      loadGallery: true,
    });
  } else if (action.type === SET_FILTER_WINDOW) {
    return Object.assign({}, state, {
      window: action.payload,
      loadGallery: true,
    });
  } else if (action.type === SET_GALLERY_ID) {
    return Object.assign({}, state, {
      galleryId: action.payload,
      loadGallery: true,
    });
  } else if (action.type === SET_FILTER_SORT) {
    return Object.assign({}, state, {
      sort: action.payload,
      loadGallery: true,
    });
  } else if (action.type === SET_FILTER_VIRAL) {
    return Object.assign({}, state, {
      showViral: action.payload,
      loadGallery: true,
    });
  }
  return state;
}
export default rootReducer;
