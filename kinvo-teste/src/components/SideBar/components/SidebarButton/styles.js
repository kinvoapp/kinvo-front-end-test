import styled from 'styled-components';

export const Container = styled.div`
  font-family: "helvetica-neue, arial";
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  p {
    padding: 0 10px;
  }
  width: 100%;
  height: 60px;
  background-color: ${(props) => (props.getState ? '#eef2f4' : '#ffffff')};
  border: 1px solid #eef2f4;
  &:hover {
    background-color: ${(props) => (props.getState ? '#5D41AC' : '#eef2f4')};
    cursor: pointer;
  }
`;
