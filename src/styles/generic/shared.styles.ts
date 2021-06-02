import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { device } from '../tools/breakpoints.styles';

export const genericShared = () => css`
  address,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  p,
  pre,
  dl,
  ol,
  ul,
  figure,
  hr,
  table,
  fieldset {
    margin-bottom: 1.3rem;
  }

  dd,
  ol,
  ul {
    margin-left: 1rem;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  @media screen and (max-width: 767px) {
    html {
      font-size: 9px;
    }
  }

  body {
    overflow-y: overlay;
    font-family: Montserrat, sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    background-color: #eef2f4;
    text-rendering: optimizeLegibility;
    padding-right: 0 !important;
  }
`;
