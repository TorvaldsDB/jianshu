import * as constants from "./constants";

const initialState = {
  focused: false
};

export default (state = initialState, { type }) => {
  switch (type) {
    case constants.SEARCH_FOCUS:
      return {
        focused: true
      };
    case constants.SEARCH_BLUR:
      return {
        focused: false
      };
    default:
      return state;
  }
};
