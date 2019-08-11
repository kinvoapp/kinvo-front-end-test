import styled from "styled-components";

export const Menu = styled.header`
  background-color: #fafafa;
  color: #627179;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 5px 10px #627179;
  position: relative;

  div {
    display: flex;
    align-items: center;
    p {
      margin: 0;
      padding-bottom: 10px;
      font-size: 45px;
    }
  }

  nav {
    display: flex;
    div {
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 60px;
        height: 27px;
        color: #707b81;
        font-weight: 500;
        span {
          text-transform: uppercase;
          font-size: 8px;
        }
        p {
          text-transform: capitalize;
          font-size: 16px;
        }
      }
    }
  }
`;

export const Circle = styled.span`
  margin: 0 5px;
  padding: 5px;
  border-radius: 50%;
  display: inline-block;
  background-color: #5d41ac;
  color: #ffffff;
`;
