// @flow
import { css } from "@emotion/core";

export const layout = css`
  height: calc(100% - 40px);
  max-width: 1440px;
  margin: 20px auto;
  background: #090e11;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1440px) {
    height: 100%;
    margin: 0 auto;
  }

  .main-layout {
    background-color: #262d31;
  }
`;
