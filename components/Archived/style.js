// @flow
import { css } from "@emotion/core";

export const archived = css`
  height: 100%;

  .empty {
    padding: 50px;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .archiveIcon {
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;
      width: 164px;
      height: 164px;
      color: #777c7f;
      margin-top: -30px;
      margin-bottom: 32px;
      background-color: #20272b;
      border-radius: 50%;
    }

    p {
      margin-bottom: 18px;
      font-size: 16px;
      color: rgb(241 241 242 / 45%);
    }
  }
`;
