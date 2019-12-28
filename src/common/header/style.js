import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
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
  .zoom {
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
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #ffffff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  .spin {
    display: block; /* 只有 block 样式才可以 transform */
    float: left; /* 必须带着 */
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    /* transform: rotate(0deg); */
    transform-origin: center center;
  }
`;
export const SearchInfoList = styled.span`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  display: block; /* a 标签没有这个属性, 无法设置宽高 */
  float: left;
  margin-left: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
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
