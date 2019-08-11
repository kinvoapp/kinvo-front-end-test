import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  ul {
    width: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-left: 4px solid #4c309b;
    padding: 0 10px;
    margin: 10px 0;
    h4 {
      width: 200px;
      font-size: 14px;
      font-weight: 500;
      color: #4c309b;
    }
    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      color: #4c309b;
      width: 80px;
      span {
        text-transform: uppercase;
        font-size: 8px;
      }
      p {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;
