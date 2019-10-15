import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => (props.active ? '#F8FAFB' : '#EEF2F4')};
  font-family: "Helvetica";
  vertical-align: middle;
  h1 {
    font-size: 16px;
    text-align: left;
    margin-left: 10%;
    background-color: transparent;
  }
  color: #707b81;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  &:hover {
    background-color: ${(props) => (props.active ? '#F8FAFB' : '#F8FAFB')};
    cursor: pointer;
  }
`;
