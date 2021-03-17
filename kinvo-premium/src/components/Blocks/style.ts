import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BlockContainer = styled.div`
  height: 4rem;
  width: 20%;
  padding: 0.5rem;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 9px;
  margin: 1rem;
  overscroll-behavior-x: auto;
`;

export const VerticalLine = styled.div`
  height: 2.5rem;
  width: 0.1rem;
  margin-right: 0.5rem;
  background-color: var(--gray-line);
`;

export const BlockTextContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BlockTitle = styled.h5`
  font-size: 7pt;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--gray-strong);

  @media (max-width: 920px) {
    font-size: 5pt;
  }
`;

export const BlockValue = styled.h2`
  font-size: 9pt;
  font-weight: 700;
  color: var(--purple);

  @media (max-width: 920px) {
    font-size: 8pt;
  }

  @media (max-width: 780px) {
    font-size: 6.5pt;
  }
`;
