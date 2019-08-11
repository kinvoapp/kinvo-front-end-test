import styled from "styled-components";

export const TabBarItemBox = styled.div`
  height: auto;
  overflow: hidden;
  padding: 30px;
  background-color: #f8fafb;
  border-radius: 0 5px 5px 5px;

  :active {
    height: auto;
  }
`;

export const Button = styled.button`
  flex: 1;
  background-color: #eef2f4;
  color: #aab5bb;
  border: 0 solid transparent;
  border-bottom-width: 0;
  border-radius: 5px 5px 0 0;
  padding: 10px 15px;
  margin-right: 10px;
  width: 20%;
  height: 65px;
  overflow: hidden;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  :active {
    background-color: #f8fafb;
    color: #707b81;
  }
`;
