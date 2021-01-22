import React, { useState, useEffect } from "react";
import { TreadsList } from "../components/TreadsList/TreadsList";
import { useDispatch } from "react-redux";
import { getProfileAction } from "../store/profile/action";
import { request } from "../store/request";
import { getThreads } from "../resources/api";
import { Sidebar } from "../components/Sidebar/Sidebar";

export default function Home() {
  const dispatch = useDispatch();
  const [sidebarName, setSidebarName] = useState("");
  const [data, setData] = useState(null);

  /**
   * Get threads list data and dispatch profile data
   */
  useEffect(() => {
    (async () => {
      await dispatch(getProfileAction());
      const response = await request.get(getThreads());
      if (response?.ok) {
        setData(response?.data);
      }
    })();
  }, []); // eslint-disable-line

  return (
    <div className="content_wrapper">
      <TreadsList getSidebarName={setSidebarName} hasHeader data={data} />
      <Sidebar sidebarName={sidebarName} setSidebarName={setSidebarName} />
    </div>
  );
}
