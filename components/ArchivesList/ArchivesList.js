// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Avatar, Dropdown } from "antd";
import { ArrowDown, Muted, User } from "../SvgIcons";
import { optionStyles } from "../../styles/globals";
import { optionsItem } from "../../utils/templates";
import { archiveList } from "./style";

type PropTypes = {
  data?: Array
};

export const ArchivesList = ({ data }: PropTypes) => {
  /**
   *  every thread options
   */
  const archiveOptions = (
    <ul css={optionStyles}>
      {optionsItem("Unarchive chat")}
      {optionsItem("Unmute notifications")}
      {optionsItem("Exit group")}
      {optionsItem("Mark as unread")}
    </ul>
  );

  return (
    <ul css={archiveList}>
      {data?.map((item: Object) => (
        <li key={item.id}>
          <Avatar icon={item.picture ? <img src={item.picture} alt="" /> : User("49", "49")} />
          <div className="info">
            <span className="name">
              <p>{item.title}</p>
              <time>{item.time}</time>
            </span>
            <span className="description">
              <small>
                {item.lastSenderName && `${item.lastSenderName}:`} {item.previewText}
              </small>
              {item.muted && <i className="muted">{Muted()}</i>}
              <span className="isArchived">Archived</span>
              <Dropdown placement="bottomRight" overlay={archiveOptions} trigger={["click"]}>
                <i className="arrowDown">{ArrowDown()}</i>
              </Dropdown>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
