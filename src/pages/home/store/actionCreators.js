import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = page => {
  // 异步请求, action 可以放回一个函数. 进行异步请求.
  return dispatch => {
    // dispatch({ type: constants.GET_MORE_LIST });
    axios.get(`/api/homeList.json?page=${page}`).then(res => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  };
};

export const toggleTopShow = show => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
});
