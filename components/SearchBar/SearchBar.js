// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { searchBar } from "./style";
import { Input } from "antd";
import { ArrowSearch, Search } from "../SvgIcons";

type PropTypes = {
  value?: string,
  setValue?: Function,
  placeholder?: string
};

export const SearchBar = ({ value, setValue, placeholder }: PropTypes) => {
  const onChange = (e: string) => setValue(e.target.value);

  return (
    <div css={searchBar}>
      <Input
        value={value}
        onChange={onChange}
        prefix={<p>{placeholder}</p>}
        suffix={
          <>
            {ArrowSearch()} {Search("20")}
          </>
        }
      />
    </div>
  );
};
