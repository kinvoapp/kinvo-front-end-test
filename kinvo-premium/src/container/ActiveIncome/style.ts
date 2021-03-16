import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: initial;
  width: 100%;
  height: 100%;
  padding-top: 5rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 15%;
  padding: 1rem;

  @media (max-width: 720px) {
    margin-left: 5%;
  }
`;
