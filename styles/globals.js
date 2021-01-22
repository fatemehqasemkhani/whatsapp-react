// @flow
import { css } from "@emotion/core";

export const colors = {
  darkGray: "#2a2f32",
  darkGray2: "#323739",
  listBg: "#131D21",
  borderColor: "#242d32",
  lightGray: "#b1b3b5",
  whatsapp: "#00af9c"
};

export const optionStyles = css`
  padding: 9px 0 !important;
  width: 176px;
  background-color: #2a2f32;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;

  .ant-btn {
    width: 100%;
    text-align: left;
    border: none;
    box-shadow: none;
    background-color: #2a2f32;
    padding: 10px 58px 10px 24px;
    height: 40px;
    font-size: 14.5px;
    color: #d4d5d7;

    &:hover {
      background-color: #222b2d;
    }
  }
`;
