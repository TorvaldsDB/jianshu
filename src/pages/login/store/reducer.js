import { fromJS } from "immutable";
import * as constants from "./constants";

const initialState = fromJS({
  login: false
});

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case constants.CHANGE_LOGIN:
      return state.set("login", payload.value);
    case constants.LOGOUT:
      return state.set("login", payload.value);
    default:
      return state;
  }
};
