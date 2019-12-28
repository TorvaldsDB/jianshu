import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <>
        {list.map((item, index) => (
          <Link key={`${item.get("id")}_${index}`} to="/detail">
            <ListItem key={`${item.get("id")}_${index}`}>
              <img alt="" className="pic" src={item.get("imgUrl")} />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="disc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
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
