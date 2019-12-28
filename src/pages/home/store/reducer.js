import { fromJS } from "immutable";
import * as constants from "./constants";

const initialState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
});

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(payload.topicList),
        articleList: fromJS(payload.articleList),
        recommendList: fromJS(payload.recommendList)
      });
    // `return state.merge()` instead of  `return state` because
    // merge is a pure function, and it won't change state
    default:
      return state;
  }
};
