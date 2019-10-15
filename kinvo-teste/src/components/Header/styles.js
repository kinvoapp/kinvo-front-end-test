import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  display: flex;
  height: 90px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 3px 20px rgba(112, 123, 129, 0.1);
  z-index: 10;

  img {
    margin: auto 0;
    padding-left: 2%;
  }
`;
