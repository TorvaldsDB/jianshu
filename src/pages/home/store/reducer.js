import { fromJS } from "immutable";
import * as constants from "./constants";

const initialState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1
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
    default:
      return state;
  }
};
