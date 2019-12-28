import { fromJS } from "immutable";
import * as constants from "./constants";

const initialState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(payload.topicList),
        articleList: fromJS(payload.articleList),
        recommendList: fromJS(payload.recommendList)
      });
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(payload.list),
        articlePage: payload.nextPage
      });
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", payload.show);
    default:
      return state;
  }
};
