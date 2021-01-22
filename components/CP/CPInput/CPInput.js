// @flow
import React from "react";
import { Input } from "antd";

type PropTypes = {
  label: Node,
  placeholder: string,
  type: string,
  addonBefore: string,
  addonAfter: string,
  fullWidth: boolean,
  inline: boolean,
  size: string,
  className: string,
  direction: string,
  value: string,
  prefix: Node,
  measurement: Node,
  suffix: Node,
  onChange: Function,
  ref: any,
  hintText: string,
  MDInput: boolean,
  disabled: boolean,
  onBlur: any,
  name: string,
  maxLength: number,
  max: number
};

const CPInput = ({
  placeholder,
  type = "text",
  addonBefore,
  addonAfter,
  size = "default",
  prefix,
  suffix,
  value,
  onChange = () => {},
  disabled = false,
  name,
  onBlur = () => {},
  maxLength,
  max
}: PropTypes) => {
  return (
    <Input
      type={type}
      required={false}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      value={value}
      prefix={prefix}
      suffix={suffix}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
      max={max}
      maxLength={maxLength}
      disabled={disabled}
      onBlur={onBlur}
    />
  );
};

export default CPInput;
