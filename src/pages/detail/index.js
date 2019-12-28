import React, { PureComponent } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";

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
}

const mapStateToProps = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});
export default connect(mapStateToProps, null)(Detail);
