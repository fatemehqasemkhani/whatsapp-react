// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import { sidebar } from "./style";
import { Drawer } from "antd";
import { Close } from "../SvgIcons";
import { Profile } from "../Profile/Profile";
import { Archived } from "../Archived/Archived";
import { Contacts } from "../Contacts/Contacts";

type PropTypes = {
  sidebarName: string,
  setSidebarName: Function
};

export const Sidebar = ({ sidebarName, setSidebarName }: PropTypes) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sidebarName) {
      setVisible(true);
    }
  }, [sidebarName]); // eslint-disable-line

  const onClose = () => {
    setVisible(false);
  };

  const handleAfterClose = (visible: boolean) => {
    if (!visible) {
      setSidebarName("");
    }
  };

  /**
   * render sidebar related node base on name
   */
  const renderSidebarContent = () => {
    switch (sidebarName) {
      case "Profile":
        return <Profile />;
      case "New chat":
        return <Contacts />;
      case "Archived":
        return <Archived />;
      default:
        return null;
    }
  };

  return (
    <Drawer
      css={sidebar}
      title={sidebarName}
      placement="left"
      onClose={onClose}
      afterVisibleChange={handleAfterClose}
      visible={visible}
      width={410}
      closeIcon={Close()}
      getContainer={false}
      mask={false}>
      {renderSidebarContent()}
    </Drawer>
  );
};
