import styled from "styled-components";

export const Navigation = styled.div`
  width: 20%;
  background-color: #ffffff;
  color: #707b81;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 10px;
      :hover,
      :active {
        background-color: #eef2f4;
      }
      a {
        color: #707b81;
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 15px 15px;
        box-sizing: border-box;
        border-left: 3px solid transparent;
      }
    }
  }
`;
