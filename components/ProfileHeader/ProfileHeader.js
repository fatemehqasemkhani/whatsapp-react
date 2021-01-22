// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Avatar, Dropdown } from "antd";
import { header } from "./style";
import CPButton from "../CP/CPButton/CPButton";
import { Contact, Update, User, Options } from "../SvgIcons";
import { useSelector } from "react-redux";
import { optionStyles } from "../../styles/globals";
import { optionsItem } from "../../utils/templates";

type PropTypes = {
  getSidebarName?: Function
};

export const ProfileHeader = ({ getSidebarName }: PropTypes) => {
  const { picture } = useSelector((state: Object) => state.profile.data) || {};

  /**
   *  user profile options
   */
  const userOptions = (
    <ul css={optionStyles}>
      {optionsItem("New group")}
      {optionsItem("Create a room")}
      {optionsItem("Profile", () => getSidebarName("Profile"))}
      {optionsItem("Archived", () => getSidebarName("Archived"))}
      {optionsItem("Starred")}
      {optionsItem("Settings")}
      {optionsItem("Log out")}
    </ul>
  );

  return (
    <header css={header}>
      <Avatar
        icon={picture ? <img src={picture} alt="" /> : User("40", "40")}
        onClick={() => getSidebarName("Profile")}
      />
      <div className="headerTools">
        <CPButton>{Update()}</CPButton>
        <CPButton onClick={() => getSidebarName("New chat")}>{Contact()}</CPButton>
        <Dropdown placement="bottomRight" overlay={userOptions} trigger={["click"]}>
          <CPButton onClick={(e: Event) => e.preventDefault()}>{Options()}</CPButton>
        </Dropdown>
      </div>
    </header>
  );
};
