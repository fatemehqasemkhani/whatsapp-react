// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { type Node } from "react";
import { Layout, Progress, Spin } from "antd";
import { layout } from "./style";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const { Content } = Layout;

type PropTypes = {
  children?: Node
};

export const MainLayout = ({ children }: PropTypes) => {
  const loading = useSelector((state: Object) => state.profile.loading);
  return (
    <Spin
      spinning={loading}
      indicator={
        <>
          <LoadingOutlined spin />
          <Progress
            trailColor="#2a2f32"
            strokeColor="#056162"
            percent={loading && 100}
            showInfo={false}
          />
        </>
      }>
      <Layout css={layout}>
        <Layout className="main-layout">
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Spin>
  );
};
