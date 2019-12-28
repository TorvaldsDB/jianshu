import { fromJS } from "immutable";

const initialState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://upload.jianshu.io/admin_banners/web_images/4852/8e9c711020897ddd2964898b6608348635be154c.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },
    {
      id: 2,
      title: "手绘",
      imgUrl:
        "https://upload.jianshu.io/admin_banners/web_images/4852/8e9c711020897ddd2964898b6608348635be154c.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },
    {
      id: 3,
      title: "社会实践",
      imgUrl:
        "https://upload.jianshu.io/admin_banners/web_images/4852/8e9c711020897ddd2964898b6608348635be154c.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    }
  ]
});

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    default:
      return state;
  }
};
