import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box; /* 防止被撑开成 1030px */
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 58px;
  color: #333333;
  padding: 0 15px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  background: #eeeeee;
  border-radius: 40px;
  margin-top: 8px;
  margin-left: 20px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 58px;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 8px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
