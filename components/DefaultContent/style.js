// @flow
import { css } from "@emotion/core";
import { colors } from "../../styles/globals";

export const defaultContent = css`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #f1f1f2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262d31;
  border-bottom: 6px solid #056162;

  .container {
    width: 80%;
    max-width: 460px;
  }

  .img {
    margin: 0 auto;
    background-image: url("/images/default.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
    transform-origin: center;
    width: 250px;
    height: 250px;
  }

  .ant-layout-sider {
    background: #131d21;
  }

  .title {
    margin-top: 28px;
    font-size: 32px;
    color: #f1f1f2;
    line-height: 32px;
    font-weight: 200;
  }

  .description {
    margin-top: 18px;
    font-size: 14px;
    color: #a6a8aa;
    text-align: center;
  }

  .device_app {
    margin-top: 34px;
    padding-top: 34px;
    border-top: 1px solid rgb(241 241 242 / 11%);
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    color: #a6a8aa;

    .icon {
      display: inline-flex;
    }

    .content {
      margin-left: 5px;

      a {
        color: ${colors.whatsapp};
      }
    }
  }
`;
