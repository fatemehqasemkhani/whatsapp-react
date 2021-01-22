// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { profile } from "./style";
import { User } from "../SvgIcons";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { fistName, lastName, about, picture } =
    useSelector((state: Object) => state.profile.data) || {};

  return (
    <div css={profile}>
      <div className="profileImg">
        {picture ? <img src={picture} alt="" /> : User("200", "200")}
      </div>
      <div className="profileInfo">
        <span className="profileName">
          <small>Your Name</small>
          <p>
            {fistName} {lastName}
          </p>
        </span>
        <span className="guidance">
          <p>
            This is not your username or pin. This name will be visible to your WhatsApp contacts.
          </p>
        </span>
        <span className="profileAbout">
          <small>About</small>
          <p>{about}</p>
        </span>
      </div>
    </div>
  );
};
