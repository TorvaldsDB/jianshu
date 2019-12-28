import axios from "axios";
// import { constants } from "."; // 它会自动寻找当前目录下的 index.js
import * as constants from "./constants";

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
});

export const getDetail = () => {
  return dispatch => {
    axios.get("/api/detail.json").then(res => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content));
    });
  };
};
