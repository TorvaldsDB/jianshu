import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <>
        {list.map((item, index) => (
          <ListItem key={`${item.get("id")}_${index}`}>
            <img alt="" className="pic" src={item.get("imgUrl")} />
            <ListInfo>
              <h3 className="title">{item.get("title")}</h3>
              <p className="disc">{item.get("desc")}</p>
            </ListInfo>
          </ListItem>
        ))}
        {/* 如不需要传递参数, onClick 必须是一个箭头函数 */}
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </>
    );
  }
}

const mapStateToProps = state => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
});

const mapDispatchToProps = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
