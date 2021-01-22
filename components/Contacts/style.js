// @flow
import { css } from "@emotion/core";
import { colors } from "../../styles/globals";

export const contacts = css`
  height: 100%;
  overflow: hidden;

  .contacts_wrapper {
    height: 100%;
    overflow-x: hidden;
    padding-bottom: 50px;

    .contactsList {
      .alphabetic_list {
        .alphabet {
          margin: 0;
          padding: 30px 0 15px 32px;
          color: ${colors.whatsapp};
          font-size: 16px;
          text-transform: uppercase;
          font-weight: 300;
        }

        .list {
          display: flex;
          align-items: center;
          cursor: pointer;

          &:hover {
            background-color: #2d3134;
          }

          .ant-avatar {
            width: 49px;
            height: 49px;
            margin: 0 15px 0 13px;
          }

          .userInfo {
            margin: 0;
            padding: 15px 0;
            font-size: 16px;
            position: relative;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
            flex: 1;
            line-height: 20px;
            color: rgb(241 241 242 / 92%);
            border-top: 1px solid #30383d;
          }

          small {
            display: block;
            text-align: left;
            margin-top: 2px;
            font-size: 14px;
            line-height: 19px;
            color: rgb(241 241 242 / 63%);
          }
        }
      }
    }

    .makeGroup {
      width: 100%;
      height: 73px;
      background-color: transparent;
      border: none;
      box-shadow: none;
      padding: 0;
      display: flex;
      align-items: center;

      &:hover {
        background-color: #2d3134;
      }

      svg {
        background: ${colors.whatsapp};
        width: 48px;
        height: 48px;
        border-radius: 50%;
        padding: 6px;
        color: #e1e1e3;
        margin: 0 15px 0 13px;
      }

      span {
        display: flex;
        font-weight: 400;
        line-height: 72px;
        font-size: 16px;
        color: rgb(241 241 242 / 92%);
        flex: 1;
      }
    }

    .frequent {
      display: block;
      position: relative;
      margin-left: 76px;
      height: 73px;
      border-top: 1px solid #242d32;

      p {
        margin: 0;
        padding: 25px 0 15px 0;
        color: #00af9c;
        font-size: 16px;
        text-transform: uppercase;
        position: absolute;
        left: -40px;
        font-weight: 300;
      }
    }
  }
`;
