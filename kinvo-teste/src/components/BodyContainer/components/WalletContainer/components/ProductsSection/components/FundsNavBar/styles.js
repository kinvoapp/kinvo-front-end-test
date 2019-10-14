import styled from 'styled-components';

export const FundsNavTitle = styled.h3`
  font-size: 18px;
  color: #707b81;
  font-family: "helvetica-neue, arial";
`;

export const FundsNav = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(65px, auto));
  justify-content: space-between;
  align-items: center;
`;

export const FundsNavInput = styled.input`
  padding: 0.3em;
  color: palevioletred;
  background: #eef2f4;
  border: solid 1px #9da5ac;
  width: 150px;
  border-radius: 10px;
  margin-bottom: 0.5em;
`;
