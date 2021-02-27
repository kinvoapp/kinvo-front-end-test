import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  padding: 30px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 32px -20px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 1px 1px 32px -20px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 1px 32px -20px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.img`
  width: 190px;
  height: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 22px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
