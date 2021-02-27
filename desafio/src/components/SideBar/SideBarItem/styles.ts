import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8fafb;

  button {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    border: none;
    background: none;
    padding: 17px 15px;

    div {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const Title = styled.h1`
  margin-left: 14px;
  font-size: 13px;
  font-weight: 500;
  width: 100px;
  text-align: start;
  color: #707b81;
`;

export const Icon = styled.img`
  width: 34px;
  height: auto;
`;
