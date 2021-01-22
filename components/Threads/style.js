// @flow
import { css } from "@emotion/core";

export const thread = css`
  height: 100%;
  position: relative;

  p {
    font-size: 12px;
    color: #f1f1f2;
    white-space: normal !important;
  }

  .thread_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 1px solid hsl(240deg 4% 95% / 11%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    padding: 10px 16px;
    background-color: #2a2f32;
    width: 100%;
    height: 60px;

    .user_info {
      display: flex;
      flex: 1;

      .ant-avatar {
        width: 40px;
        height: 40px;
        margin: 0 15px 0 0;
      }

      .name {
        width: auto;

        p {
          font-size: 16px;
          font-weight: 400;
          color: hsl(240deg 4% 95% / 92%);
        }
      }
    }

    .btns {
      .ant-btn {
        color: #828689;
        background-color: transparent;
        border: none;
        box-shadow: none;
        line-height: 42px;
        width: 40px;

        &:first-of-type {
          margin-right: 8px;
        }
      }
    }
  }

  .threads_container {
    height: calc(100% - 122px);
    background-repeat: repeat;
    background-color: #0d1418;
    background-image: url("./images/bg.png");
    background-size: 412.5px 749.25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    > div {
      height: auto;
      display: flex;
      flex-direction: column;
      margin-top: auto;
      overflow-y: auto;
      padding-top: 10px;
    }

    button {
      background-color: #262d31 !important;
      bottom: 15px !important;
      right: 15px !important;
      width: 42px !important;
      height: 42px !important;
      border-radius: 50% !important;
      z-index: 10000 !important;

      &:before {
        position: relative;
        top: 0;
        right: 4px;
        content: "";
        display: inline-block;
        width: 11px;
        height: 11px;
        border-right: 0.2em solid #797c7e;
        border-top: 0.2em solid #797c7e;
        transform: rotate(135deg);
        margin-right: 0.5em;
        margin-left: 1em;
      }
    }

    i {
      font-style: normal;
    }

    .time_check {
      display: block;
      text-align: right;
      line-height: 10px;

      .check {
        vertical-align: text-top;
        margin-left: 3px;
        color: rgb(241 241 242 / 63%);
      }

      .seen {
        vertical-align: text-top;
        margin-left: 3px;
        color: #34b7f1;
      }
    }

    .triangle {
      position: absolute;
      top: 0;
      z-index: 100;
      display: block;
      width: 8px;
      height: 13px;
    }

    .myMessageWrapper,
    .contactMessageWrapper {
      display: flex;
    }

    .myMessageWrapper {
      flex-direction: row-reverse;
    }

    .myMessage,
    .contactMessage {
      position: relative;
      padding: 6px 7px 6px 9px;
      margin-right: 6.5%;
      margin-left: 6.5%;
      margin-bottom: 10px;
      transition: all 0.2s;

      &:hover {
        .arrowDown {
          opacity: 1;
        }
      }

      img {
        margin-bottom: 5px;
      }

      .arrowDown {
        width: 22px;
        opacity: 0;
        color: rgb(241 241 242 / 63%);
        transition: all 0.2s;
      }

      time {
        color: rgb(241 241 242 / 63%);
      }

      @media screen and (max-width: 1300px) and (min-width: 1025px) {
        max-width: 75%;
      }

      @media screen and (max-width: 1024px) and (min-width: 901px) {
        max-width: 85%;
      }

      @media screen and (max-width: 900px) {
        max-width: 95%;
      }
    }

    .myMessage {
      border-radius: 7.5px 0 7.5px 7.5px;
      background-color: #056162;

      p {
        color: rgb(241 241 242 / 95%);
        font-size: 14.2px;
      }

      .triangle {
        color: #056162;
        right: -8px;
      }
    }

    .contactMessage {
      border-radius: 0 7.5px 7.5px 7.5px;
      background-color: #262d31;

      p {
        color: rgb(241 241 242 / 95%);
        font-size: 14.2px;
      }

      .triangle {
        color: #262d31;
        left: -8px;
      }
    }

    .messageHeader {
      display: flex;
      justify-content: space-between;
      line-height: 0;

      .sender {
        font-size: 12.8px;
        font-weight: 500;
        line-height: 22px;
        color: #6bcbef;
      }
    }
  }

  .thread_footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    background-color: #1e2528;
    z-index: 2;
    width: 100%;
    align-items: center;
    min-height: 62px;

    .ant-btn {
      color: #828689;
      background-color: transparent;
      border: none;
      box-shadow: none;
      padding: 0 6px;
      line-height: 42px;

      &:first-of-type {
        width: 26px;
        margin-left: 8px;
        margin-right: 10px;
        padding: 0;
      }

      &:last-child {
        margin: 5px 10px;
      }
    }

    form {
      width: 100%;

      .ant-input {
        padding: 9px 12px 11px;
        margin: 5px 10px;
        font-size: 15px;
        font-weight: 400;
        color: #f1f1f2;
        background-color: #33383b;
        border: 1px solid #33383b;
        border-radius: 21px;
        height: 42px;
      }
    }
  }
`;

export const optionsStyle = css`
  padding: 9px 0;
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
