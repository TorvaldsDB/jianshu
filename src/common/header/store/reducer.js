const initialState = {
  focused: false
};

export default (state = initialState, { type }) => {
  switch (type) {
    case "search_focus":
      return {
        focused: true
      };
    case "search_blur":
      return {
        focused: false
      };
    default:
      return state;
  }
};
