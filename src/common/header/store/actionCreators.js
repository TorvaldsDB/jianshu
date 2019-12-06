import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

export const searchFoucus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
});

// 使用 redux-thunk 后, 可以不仅仅返回一个对象了, 还可以返回一个函数.
// 这个函数默认接收 dispatch 参数
export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
