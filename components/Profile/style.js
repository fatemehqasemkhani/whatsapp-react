// @flow
import { css } from "@emotion/core";

export const profile = css`
  .profileImg {
    margin: 28px auto;
    display: block;
    text-align: center;

    img {
      border-radius: 50%;
      height: 200px;
    }
  }

  .guidance {
    display: block;
    margin: 4px 20px 28px 30px;

    p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      color: rgb(241 241 242 / 45%);
    }
  }

  .profileName,
  .profileAbout {
    display: block;
    padding: 14px 30px 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);

    p {
      min-height: 20px;
      font-size: 17px;
      line-height: 20px;
      color: #d4d5d7;
      margin: 8px 0;
    }

    small {
      font-size: 14px;
      line-height: normal;
      color: #009688;
      margin-bottom: 14px;
      display: block;
    }
  }
`;
