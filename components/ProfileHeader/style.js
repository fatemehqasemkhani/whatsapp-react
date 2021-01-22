// @flow
import { css } from "@emotion/core";
import { colors } from "../../styles/globals";

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: ${colors.darkGray};
  width: 410px;

  .ant-btn {
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 8px;
    margin-left: 10px;
  }

  .ant-avatar {
    width: 40px !important;
    height: 40px !important;
    margin: 0 !important;
    cursor: pointer;
  }

  svg {
    color: ${colors.lightGray};
  }
`;
