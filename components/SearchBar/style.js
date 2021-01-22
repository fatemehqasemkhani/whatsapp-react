// @flow
import { css } from "@emotion/core";
import { colors } from "../../styles/globals";

export const searchBar = css`
  background: ${colors.listBg};
  padding-right: 15px;
  padding-left: 15px;
  height: 49px;
  line-height: 44px;
  border-bottom: 1px solid #242d32;
  width: 410px;

  .ant-input-affix-wrapper {
    background: #323739;
    border-radius: 18px;
    border: none;
    direction: rtl;
    height: 35px;

    input {
      background: transparent;
      border: none;
      box-shadow: none;
      height: 25px;
      direction: ltr;
      padding-right: 32px;
      padding-left: 32px;
      font-size: 15px;
      color: #d4d5d7;
    }
  }

  .arrowIcon {
    position: absolute;
    left: 10px;
    opacity: 0;
    z-index: 0;
    transition: 0.3s;
    transform: rotate(-135deg);
  }

  .ant-input-affix-wrapper-focused {
    .searchIcon {
      opacity: 0;
    }

    .arrowIcon {
      opacity: 1;
      transform: rotate(0deg);
    }

    .ant-input-prefix {
      opacity: 0;
    }
  }

  .ant-input-suffix {
    svg {
      color: #828689;
    }

    .searchIcon {
      vertical-align: top;
    }
  }

  .ant-input-prefix {
    position: absolute;
    left: 65px;
    font-size: 15px;
    top: 5px;
    color: #828689;
    opacity: 1;
    transition: 0.4s;
  }
`;
