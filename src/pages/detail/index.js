import React, { PureComponent } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "../detail/store";

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }

  componentDidMount() {
    const { getDetail } = this.props;
    getDetail();
  }
}

const mapStateToProps = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispatchToProps = dispatch => ({
  getDetail() {
    dispatch(actionCreators.getDetail());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
