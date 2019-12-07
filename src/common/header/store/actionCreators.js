import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFoucus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
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

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const ChangePage = newPage => ({
  type: constants.CHANGE_PAGE,
  page: newPage
});
