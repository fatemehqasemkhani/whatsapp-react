// @flow
import { css } from "@emotion/core";
import { colors } from "../../styles/globals";

export const sidebar = css`
  background: ${colors.listBg};
  position: absolute;

  .ant-drawer-header {
    position: relative;
    padding: 0 20px 0 23px;
    color: #e1e1e3;
    border-bottom: none;
    border-radius: 0;
    background: #323739;
    height: 109px;
    display: flex;

    .ant-drawer-close {
      position: absolute;
      bottom: 15px;
      left: 23px;
      right: initial;
      top: initial;
      z-index: 10;
      display: block;
      padding: 0;
      color: #e1e1e3;
      font-size: 16px;
      background: transparent;
    }

    .ant-drawer-title {
      color: #e1e1e3;
      font-size: 19px;
      line-height: 160px;
      margin-left: 53px;
      font-weight: 400;
    }
  }

  .ant-drawer-body {
    padding: 0;
    background-color: #131d21;
  }
`;
