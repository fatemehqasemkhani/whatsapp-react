// @flow
import { css } from "@emotion/core";

export const chats = css`
  height: 100%;

  .ant-tabs-nav {
    background: #131c21 !important;
    border-right: 1px solid hsl(240deg 4% 95% / 11%);
  }

  .ant-tabs-nav-wrap {
    width: 410px;
  }

  .ant-tabs-ink-bar {
    display: none;
    visibility: hidden;
  }

  .ant-tabs-tab {
    padding: 0 !important;
    margin: 0 !important;

    &:first-of-type {
      display: none;
      visibility: hidden;
    }

    &.ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        background-color: #323739;
        color: #f1f1f2;
        font-weight: unset;
      }
    }
  }

  .ant-tabs-tab-btn {
    padding: 0 !important;
    height: 72px;
    width: 100%;
    margin: 0 !important;
    background: #131c21;
    color: #f1f1f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ease 0.5s;

    &:hover {
      background-color: #323739 !important;

      .description {
        .arrowDown {
          width: 22px;
          opacity: 1;
          margin-left: 5px;
          text-align: left;
        }
      }
    }
  }

  .ant-avatar {
    width: 49px;
    height: 49px;
    margin: 0 15px 0 13px;
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 25px;
    padding: 8px 25px 9px 0;
    border-bottom: 1px solid #242d32;
  }

  .name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  p {
    margin: 0;
    font-size: 16px;
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  time {
    font-size: 12px;
    margin: 3px 0 0 6px;
    color: #f1f1f2;
  }

  .description {
    display: flex;
    text-align: left;
    justify-content: space-between;

    small {
      flex: 1;
    }

    i {
      color: rgb(241 241 242 / 30%);
      margin-left: 6px;
    }

    .arrowDown {
      width: 0;
      opacity: 0;
      transition: all 0.2s;
    }

    .isArchived {
      padding: 1px 5px 0;
      border: 1px solid hsl(0deg 0% 60% / 70%);
      border-radius: 3px;
      display: inline-block;
      height: 19px;
      font-size: 11px;
      line-height: 15px;
      color: #999;
    }
  }

  .ant-tabs-tabpane {
    padding: 0 !important;
  }

  .ant-tabs-content {
    height: 100%;
    background-color: #0d1418;
  }
`;
