import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Helvetica";
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: ${(props) => (props.getState ? '#eef2f4' : '#ffffff')};
  border: 1px solid #eef2f4;
  &:hover {
    background-color: ${(props) => (props.getState ? '#5D41AC' : '#eef2f4')};
    cursor: pointer;
  }
`;

export const ButtonInfo = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px;
`;
