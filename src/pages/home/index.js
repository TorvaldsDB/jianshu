import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import List from "./components/List";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const { showScroll } = this.props;
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
        {showScroll && <BackTop onClick={this.handleScrollTop}>顶部</BackTop>}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    this.unbindEvents();
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }

  unbindEvents() {
    window.RemoveEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapStateToProps = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    dispatch(
      actionCreators.toggleTopShow(document.documentElement.scrollTop > 400)
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
