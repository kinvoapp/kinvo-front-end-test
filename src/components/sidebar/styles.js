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
  height: 20%;
  min-height: 200px;
  padding-left: 50px;
  padding-top: 30px;
  -webkit-box-shadow: 0px 5px 37px -16px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 5px 37px -16px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 5px 37px -16px rgba(0, 0, 0, 0.15);
`;
export const Sidebar = styled.aside`
  margin-top: 0;
  height: 90vh;
  width: 300px;
  flex-direction: row;
`;
export const Bar = styled.div`
  height: 80px;
  width: 100%;
  padding-right: 20px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-style: solid;
  border-bottom-width: 0.3px;
  border-color: #cccfd1;
`;
export const Label = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: #707b81;
`;
