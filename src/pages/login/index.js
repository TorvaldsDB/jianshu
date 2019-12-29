import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from "./store";

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input
            placeholder="账号"
            ref={input => {
              this.account = input;
            }}
          />
          <Input
            placeholder="密码"
            type="password"
            ref={input => {
              this.password = input;
            }}
          />
          <Button onClick={() => this.props.login(this.account, this.password)}>
            登录
          </Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.valud));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
