import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;

  h1 {
    color: var(--purpleDark);
    font-size: 25px;
  }
`;

export const RentabilityTitleContainer = styled.div`
  margin-top: 10px;
  img {
    width: auto;
    margin-left: -10px;
  }
`;

export const GraphContainer = styled.div`
  margin-top: 10px;
  //border: 1px solid red;
  display: flex;
  gap: 10px;
`;
