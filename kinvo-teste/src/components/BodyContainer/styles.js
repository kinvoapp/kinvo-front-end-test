import styled from 'styled-components';

export const BodyContainerLabel = styled.div`
  font-family: "Helvetica";
  font-size: 20px;
  color: #707b81;
  font-weight: 300;
  text-align: left;
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

export const Container = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 30px;
  grid-area: assetsWrapperSuper;
  background-color: #DAE0E3;
  padding: 15px;
`;

export const LoadingContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
`;
