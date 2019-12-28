import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class List extends Component {
  render() {
    const { list, getMoreList } = this.props;
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
        <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
      </>
    );
  }
}

const mapStateToProps = state => ({
  list: state.getIn(["home", "articleList"])
});

const mapDispatchToProps = dispatch => ({
  getMoreList() {
    dispatch(actionCreators.getMoreList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
