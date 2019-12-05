import * as constants from "./constants";
import { fromJS } from "immutable";

const initialState = fromJS({
  focused: false,
  list: []
});

export default (state = initialState, { type }) => {
  switch (type) {
    case constants.SEARCH_FOCUS:
      // immutable 对象的 set 方法, 会结合之前 immutable 对象的值
      // 和设置的值, 返回一个全新的对象, 中间并没有修改 state
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    default:
      return state;
  }
};
