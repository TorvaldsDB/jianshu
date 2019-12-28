import { fromJS } from "immutable";
import * as constants from "./constants";

const initialState = fromJS({
  title: "Css 小技巧",
  content: `<img alt="" src="https://tinyjpg.com/images/social/website.jpg" />
          <b>2020 加油呀</b>
          <p>
            在页面构建中，能明显提升页面显示质量的一些CSS小技巧。很多简洁美观的页面表现，可以使用CSS3代码即可实现，减少图片的使用。
          </p>
          <p>
            在页面构建中，能明显提升页面显示质量的一些CSS小技巧。很多简洁美观的页面表现，可以使用CSS3代码即可实现，减少图片的使用。
          </p>`
});

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    default:
      return state;
  }
};
