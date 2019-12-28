import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import List from "./components/List";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import axios from "axios";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4852/8e9c711020897ddd2964898b6608348635be154c.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      const action = {
        type: "change_home_data",
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      };
      this.props.changeHomeData(action);
    });
  }
}

const mapDispatchToProps = dispatch => ({
  changeHomeData(aciton) {
    dispatch(aciton);
  }
});

export default connect(null, mapDispatchToProps)(Home);
