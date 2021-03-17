import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BoardContainer = styled.div`
  background-color: var(--white);
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0rem 1rem;
  border-radius: 10px;
  flex-direction: column;
`;

export const BoardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 780px) {
    margin-bottom: 0rem;
  }
`;

export const BoardButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 13pt;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--gray-strong);

  @media (max-width: 920px) {
    font-size: 10pt;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props: { color: string }) => props.color};
`;

export const AlertText = styled.div`
  font-size: 10pt;
  font-weight: 500;
  color: var(--gray-strong);
  text-align: center;
  margin: 1rem 0;
`;

export const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  margin: 40px;
  width: 50px;
  height: 50px;
  align-self: center;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

