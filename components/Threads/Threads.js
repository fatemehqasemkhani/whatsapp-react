// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect, useState, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { thread } from "./style";
import { Avatar, Dropdown } from "antd";
import moment from "moment";
import {
  ArrowDown,
  Attach,
  Checked,
  DoubleChecked,
  Group,
  leftTriangle,
  Options,
  Record,
  rightTriangle,
  Search,
  Send,
  Sticker
} from "../SvgIcons";
import CPButton from "../CP/CPButton/CPButton";
import CPInput from "../CP/CPInput/CPInput";
import { request } from "../../store/request";
import { getMessages, getThreads, postMessage } from "../../resources/api";
import { optionStyles } from "../../styles/globals";
import { optionsItem } from "../../utils/templates";

type PropTypes = {
  data?: Object
};

export const Threads = ({ data }: PropTypes) => {
  const { id, title, group, picture } = data || {};
  const [value, setValue] = useState(null);
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await request.get(getMessages(id));
      if (response?.ok) {
        setDataSource(response?.data);
      }
    })();
  }, [id]); // eslint-disable-line

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      id: Math.floor(Math.random() * (1 - 100000 + 1)) + 100000,
      time: new Date(),
      text: value,
      myMessage: true,
      message_id: parseInt(id),
      group: true,
      muted: true
    };

    const response = await request.post(postMessage(id), body);

    if (response.ok) {
      setValue("");
      const response = await request.get(getMessages(id));
      await request.get(getThreads());
      if (response?.ok) {
        setDataSource(response?.data);
      }
    }
  };

  /**
   *  every messages options
   */
  const messagesOptions = (
    <ul css={optionStyles}>
      {optionsItem("Contact info")}
      {optionsItem("Select messages")}
      {optionsItem("Mute notifications")}
      {optionsItem("Clear messages")}
      {optionsItem("Delete chat")}
    </ul>
  );

  /**
   *  every message options
   */
  const messageOptions = (
    <ul css={optionStyles}>
      {optionsItem("Message info")}
      {optionsItem("Reply")}
      {optionsItem("Star messages")}
      {optionsItem("Delete Message")}
    </ul>
  );

  return (
    <div css={thread}>
      <header className="thread_header">
        <div className="user_info">
          <Avatar icon={picture ? <img src={picture} alt="" /> : Group()} />
          <span className="name">
            <p>{title}</p>
          </span>
        </div>
        <div className="btns">
          <CPButton icon={Search()} />
          <Dropdown placement="bottomRight" overlay={messagesOptions} trigger={["click"]}>
            <CPButton icon={Options()} />
          </Dropdown>
        </div>
      </header>
      <ScrollToBottom className="threads_container">
        {dataSource?.map((item: Object) => (
          <div
            key={item?.id}
            className={item.myMessage ? "myMessageWrapper" : "contactMessageWrapper"}>
            <div className={item.myMessage ? "myMessage" : "contactMessage"}>
              <span className="messageHeader">
                {!item.myMessage && !group && <small className="sender">{title}</small>}
                {item.senderName && <small className="sender">{item.senderName}</small>}
                {item.myMessage ? (
                  <i className="triangle">{rightTriangle()}</i>
                ) : (
                  <i className="triangle">{leftTriangle()}</i>
                )}
                <Dropdown placement="bottomLeft" overlay={messageOptions} trigger={["click"]}>
                  <i className="arrowDown">{ArrowDown()}</i>
                </Dropdown>
              </span>
              {item.image && <img src={item.image} alt="" width={330} />}
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
              <span className="time_check">
                <time>{moment(item.time).format("H:mm")}</time>
                {item.myMessage && (
                  <i className={item?.isSeen ? "seen" : "check"}>
                    {item.isDelivered ? DoubleChecked() : Checked()}
                  </i>
                )}
              </span>
            </div>
          </div>
        ))}
      </ScrollToBottom>
      <footer className="thread_footer">
        <CPButton icon={Sticker()} />
        <CPButton icon={Attach()} />
        <form onSubmit={handleSubmit}>
          <CPInput dir="auto" placeholder="Type a message" value={value} onChange={handleChange} />
        </form>
        {value ? <CPButton icon={Send()} onClick={handleSubmit} /> : <CPButton icon={Record()} />}
      </footer>
    </div>
  );
};
