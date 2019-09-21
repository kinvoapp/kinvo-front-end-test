import styled from "styled-components";

export const Produto = styled.div`
  display: grid;
  font-family: "helvetica-neue, arial";
  width: 80%;
  height: 45px;
  grid-template-columns: repeat(8, 1fr);
  color: #4c309b;
`;

export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.2);
  margin-left: -100px;
`;

export const PequenaInfo = styled.div``;

export const P = styled.p`
  font-size: ${props => `${props.fontSize}px`};
`;
