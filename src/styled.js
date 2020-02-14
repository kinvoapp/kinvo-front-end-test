import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Header = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 10vh;
  padding-left: 50px;
  padding-top: 30px;
  /* background-color: #c9c9; */
  -webkit-box-shadow: 0px 5px 37px -16px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 5px 37px -16px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 5px 37px -16px rgba(0, 0, 0, 0.15);
`;
export const Aside = styled.aside`
  margin-top: 0;
  height: 100vh;
  width: 35%;
  max-width: 300px;
  flex-direction: row;
`;

export const Main = styled.div`
  margin-top: 0;
  height: 90vh;
  width: 100%;
`;
