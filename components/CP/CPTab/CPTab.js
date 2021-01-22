// @flow
import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

type PropTypes = {
  className?: string,
  handleChange?: Function,
  onTabClick?: any,
  tabPane?: Array<Object>,
  defaultKey?: string,
  activeKey?: string,
  tabBarExtraContent?: Node,
  size?: string,
  position?: string,
  type?: string
};

const CPTab = ({
  className,
  handleChange = () => {},
  onTabClick = () => {},
  tabBarExtraContent,
  size = "default",
  position = "top",
  type = "default",
  activeKey,
  defaultKey,
  tabPane
}: PropTypes) => {
  return (
    <Tabs
      className={className}
      activeKey={activeKey}
      defaultActiveKey={defaultKey}
      onChange={handleChange}
      tabBarExtraContent={tabBarExtraContent}
      size={size}
      tabPosition={position}
      type={type}
      onTabClick={onTabClick}>
      {tabPane.map((v: Object) => (
        <TabPane tab={v.tab} key={v.key} disabled={v.disabled}>
          {v.children}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default CPTab;
