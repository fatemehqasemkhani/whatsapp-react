// @flow
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import App from "next/app";
import React from "react";
import { wrapper } from "../store/store";
import { MainLayout } from "../components/MainLayout/MainLayout";

type PropTypes = {
  Component: () => void,
  ctx: Object
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: PropTypes) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ConfigProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ConfigProvider>
    );
  }
}

export default wrapper.withRedux(MyApp);
