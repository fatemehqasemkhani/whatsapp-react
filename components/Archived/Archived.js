/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import { Archive } from "../SvgIcons";
import { request } from "../../store/request";
import { getArchives } from "../../resources/api";
import { archived } from "./style";
import { ArchivesList } from "../ArchivesList/ArchivesList";

export const Archived = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await request.get(getArchives());
      if (response?.ok) {
        setData(response?.data);
      }
    })();
  }, []); // eslint-disable-line

  return (
    <div css={archived}>
      {data?.length ? (
        <ArchivesList data={data} />
      ) : (
        <div className="empty">
          <span className="archiveIcon">{Archive()}</span>
          <p>No archived chats</p>
        </div>
      )}
    </div>
  );
};
