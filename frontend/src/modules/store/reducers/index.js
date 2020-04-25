import { LOAD_GALLERY } from "../constants/action-types";

const initialState = {
  gallery: null,
};

function rootReducer(state = initialState, action) {
  if (action.type === LOAD_GALLERY) {
    return Object.assign({}, state, {
      gallery: action.payload,
    });
  }
  return state;
}
export default rootReducer;
