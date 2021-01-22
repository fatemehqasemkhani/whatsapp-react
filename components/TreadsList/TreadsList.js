// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { Avatar, Dropdown } from "antd";
import { chats } from "./style";
import { ArrowDown, Muted, User } from "../SvgIcons";
import CPTab from "../CP/CPTab/CPTab";
import { Threads } from "../Threads/Threads";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import { SearchBar } from "../SearchBar/SearchBar";
import DefaultContent from "../DefaultContent/DefaultContent";
import { optionsItem } from "../../utils/templates";
import { optionStyles } from "../../styles/globals";

type PropTypes = {
  data?: Array,
  hasHeader?: boolean,
  getSidebarName?: Function
};

export const TreadsList = ({ data, hasHeader, getSidebarName }: PropTypes) => {
  const [activeKey, setActiveKey] = useState("0");
  const [searchThread, setSearchTread] = useState("");

  /**
   *  handle active thread
   */
  const callback = (key: string): void => {
    setActiveKey(key);
  };

  /**
   *  every thread options
   */
  const threadOptions = (
    <ul css={optionStyles}>
      {optionsItem("Archive chat")}
      {optionsItem("Unmute notifications")}
      {optionsItem("Exit group")}
      {optionsItem("Pin chat")}
      {optionsItem("Mark as unread")}
    </ul>
  );

  /**
   *  render default content when no thread is selected
   */
  const defaultThread = () => {
    return [
      {
        key: "0",
        tab: <div />,
        children: <DefaultContent />
      }
    ];
  };

  /**
   *  get threads list data and create related node
   */
  const dataSource = data?.map((item: Object) => {
    const { id, title, previewText, lastSenderName, muted, time, picture } = item;
    return {
      key: id,
      tab: (
        <>
          <Avatar icon={picture ? <img src={picture} alt="" /> : User("49", "49")} />
          <div className="info">
            <span className="name">
              <p>{title}</p>
              <time>{time}</time>
            </span>
            <span className="description">
              <small>
                {lastSenderName && `${lastSenderName}:`} {previewText}
              </small>
              {muted && <i className="muted">{Muted()}</i>}
              <Dropdown
                onClick={(e) => e.stopPropagation()}
                placement="bottomRight"
                overlay={threadOptions}
                trigger={["click"]}>
                <i className="arrowDown">{ArrowDown()}</i>
              </Dropdown>
            </span>
          </div>
        </>
      ),
      children: <Threads data={item} />
    };
  });

  /**
   * profile header and search bar
   */
  const threadHeader = {
    left: (
      <>
        <ProfileHeader getSidebarName={getSidebarName} />
        <SearchBar
          value={searchThread}
          setValue={setSearchTread}
          placeholder="Search or start new chat"
        />
      </>
    )
  };

  return (
    <>
      <CPTab
        tabBarExtraContent={hasHeader ? threadHeader : null}
        position="left"
        tabPane={dataSource?.length ? defaultThread().concat(dataSource) : []}
        css={chats}
        handleChange={callback}
        defaultKey={activeKey}
      />
    </>
  );
};
