// @flow
import React from "react";
import CPButton from "../components/CP/CPButton/CPButton";

export const optionsItem = (name: string, onClick: Function) => (
  <li>
    <CPButton onClick={onClick}>{name}</CPButton>
  </li>
);
