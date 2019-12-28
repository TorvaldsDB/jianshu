import { fromJS } from "immutable";
import * as constants from "./constants";

const initialState = fromJS({
  title: "",
  content: ""
});

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case constants.CHANGE_DETAIL:
      // 字符串以及数字不需要 immutable 处理
      return state.merge({
        title: payload.title,
        content: payload.content
      });
    default:
      return state;
  }
};
