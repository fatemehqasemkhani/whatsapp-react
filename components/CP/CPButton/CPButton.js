// @flow
import React from "react";
import { Button } from "antd";

type PropTypes = {
  children?: Node,
  disabled?: boolean,
  onClick?: Function,
  icon?: Node,
  type?: string,
  size?: string,
  shape?: string,
  className?: string,
  htmlType?: Node,
  loading?: boolean,
  style?: Object
};

const CPButton = ({
  children,
  disabled = false,
  onClick = () => {},
  icon,
  type = "default",
  size = "default",
  className,
  shape,
  htmlType,
  loading = false,
  style
}: PropTypes) => {
  return (
    <Button
      style={
        type === "plain" ? Object.assign({}, style, { border: "0px solid transparent" }) : style
      }
      type={type}
      className={className}
      onClick={onClick}
      icon={icon}
      disabled={disabled}
      size={size}
      shape={shape}
      htmlType={htmlType}
      loading={loading}>
      {children}
    </Button>
  );
};

export default CPButton;
