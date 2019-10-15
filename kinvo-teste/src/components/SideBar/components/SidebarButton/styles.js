import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  font-family: "Helvetica";
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background-color: ${(props) => (props.getState ? '#eef2f4' : '#ffffff')};
  border-bottom: 1px solid #eef2f4;
  &:hover {
    background-color: ${(props) => (props.getState ? '#5D41AC' : '#DAE0E3')};
    cursor: pointer;
  }

`;

export const ButtonInfo = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px;

  p {
    color: #707B81;
  }
`;

export const ButtonLogo = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: ${(props) => (props.getState ? '#5D41AC' : '#DAE0E3')};
  border-radius: 50%;
  img {
    padding: 10px;
  }
`;
