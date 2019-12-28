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
  ],
  articleList: [
    {
      id: 1,
      title: "“你那么穷，就是因为你太闲了！”",
      desc:
        "文/ 霍辉 穷困，都是闲出来的，高薪，都是忙出来的。\n 前几天，表妹背了个高仿的LV包包去参加一个聚会，有人讥讽她：“一看就知道你这是A货（假冒）...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/4417736-fd850239a2d76f33?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 1,
      title: "“你那么穷，就是因为你太闲了！”",
      desc:
        "文/ 霍辉 穷困，都是闲出来的，高薪，都是忙出来的。\n 前几天，表妹背了个高仿的LV包包去参加一个聚会，有人讥讽她：“一看就知道你这是A货（假冒）...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/4417736-fd850239a2d76f33?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 1,
      title: "“你那么穷，就是因为你太闲了！”",
      desc:
        "文/ 霍辉 穷困，都是闲出来的，高薪，都是忙出来的。\n 前几天，表妹背了个高仿的LV包包去参加一个聚会，有人讥讽她：“一看就知道你这是A货（假冒）...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/4417736-fd850239a2d76f33?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 1,
      title: "“你那么穷，就是因为你太闲了！”",
      desc:
        "文/ 霍辉 穷困，都是闲出来的，高薪，都是忙出来的。\n 前几天，表妹背了个高仿的LV包包去参加一个聚会，有人讥讽她：“一看就知道你这是A货（假冒）...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/4417736-fd850239a2d76f33?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 1,
      title: "“你那么穷，就是因为你太闲了！”",
      desc:
        "文/ 霍辉 穷困，都是闲出来的，高薪，都是忙出来的。\n 前几天，表妹背了个高仿的LV包包去参加一个聚会，有人讥讽她：“一看就知道你这是A货（假冒）...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/4417736-fd850239a2d76f33?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ]
});

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    default:
      return state;
  }
};
