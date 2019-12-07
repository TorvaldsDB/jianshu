import * as constants from "./constants";
import { fromJS } from "immutable";

const initialState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
});

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case constants.SEARCH_FOCUS:
      // immutable 对象的 set 方法, 会结合之前 immutable 对象的值
      // 和设置的值, 返回一个全新的对象, 中间并没有修改 state
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.CHANGE_LIST:
      return state.merge({
        list: payload.data,
        totalPage: payload.totalPage
      });
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set("page", payload.page);
    default:
      return state;
  }
};
