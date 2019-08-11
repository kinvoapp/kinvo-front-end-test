import styled from "styled-components";

export const ContentBox = styled.section`
  padding: 30px;
  background-color: #dae0e3;
  width: 100%;
  h1 {
    text-transform: capitalize;
    color: #707b81;
    font-size: 20px;
    margin-bottom: 23px;
    font-weight: 500;
  }
`;

export const FormBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  h1 {
    font-size: 18px;
    color: #707b81;
    font-weight: 500;
  }
  form {
    position: relative;
  }
  button {
    position: absolute;
    top: 8px;
    right: 10px;
    z-index: 10;
    border: none;
    background: transparent;
    outline: none;
    color: #9da5ac;
  }
  input {
    background-color: #eef2f4;
    font-size: 18px;
    height: 33px;
    padding: 0 35px 0 20px;
    border: 0;
    border-radius: 30px;
    color: #9da5ac;
  }
`;

export const CardBox = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      height: 75px;
      width: 191px;
      background-color: #fff;
      text-align: center;
      justify-content: center;
      padding: auto;
      border-radius: 5px;
      color: #707b81;
      span {
        text-transform: uppercase;
        font-size: 10px;
      }
      p {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;
