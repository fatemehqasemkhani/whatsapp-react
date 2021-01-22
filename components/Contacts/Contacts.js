// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect, useState } from "react";
import { request } from "../../store/request";
import { getContacts } from "../../resources/api";
import { Avatar } from "antd";
import { Group, User } from "../SvgIcons";
import { SearchBar } from "../SearchBar/SearchBar";
import CPButton from "../CP/CPButton/CPButton";
import { contacts } from "./style";

export const Contacts = () => {
  const [data, setData] = useState(null);
  const [searchContact, setSearchContact] = useState("");

  useEffect(() => {
    (async () => {
      const response = await request.get(getContacts());
      if (response?.ok) {
        setData(response?.data);
      }
    })();
  }, []); // eslint-disable-line

  const handleSortData = () => {
    if (data?.length) {
      const sortedData = data?.sort((a: Object, b: Object) =>
        a.firstName.localeCompare(b.firstName, "es", { sensitivity: "base" })
      );

      const result = sortedData?.reduce((r: Object, e: Object) => {
        let alphabet = e.firstName[0];
        if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] };
        else r[alphabet].record.push(e);
        return r;
      }, {});

      return Object.values(result);
    } else {
      return null;
    }
  };

  /**
   * Client search on contacts
   */
  const dataSource = !searchContact
    ? handleSortData()
    : handleSortData().map((element: Object) => {
        return {
          ...element,
          record: element.record.filter(
            (item: Object) =>
              item?.firstName?.toLowerCase().includes(searchContact?.toLowerCase()) ||
              item?.lastName?.toLowerCase().includes(searchContact?.toLowerCase())
          )
        };
      });

  return (
    <div css={contacts}>
      <SearchBar value={searchContact} setValue={setSearchContact} placeholder="Search contacts" />
      <div className="contacts_wrapper">
        <CPButton className="makeGroup" icon={Group()}>
          New Group
        </CPButton>
        {/*<span className="frequent">*/}
        {/*  <p>Frequently Contacted</p>*/}
        {/*</span>*/}
        <div className="contactsList">
          {dataSource?.map((items: Object) => (
            <div className="alphabetic_list" key={items.alphabet}>
              {items?.record?.length ? <p className="alphabet">{items.alphabet}</p> : null}
              {items?.record?.map((item: Object) => (
                <div key={item.id} className="list">
                  <Avatar
                    icon={
                      item?.profilePicture ? (
                        <img src={item?.profilePicture} alt="" />
                      ) : (
                        User("49", "49")
                      )
                    }
                  />
                  <p className="userInfo">
                    {item.firstName} {item.lastName}
                    <small>{item.description}</small>
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
