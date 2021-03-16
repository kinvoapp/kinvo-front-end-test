import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 15%;
  background-color: var(--white);
  flex-direction: column;
  display: flex;
  position: fixed;

  @media (max-width: 720px) {
    max-width: 4rem;
    align-items: center;
  }
`;

export const SectionContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.01rem solid var(--gray-border);
  justify-content: space-between;
  background-color: ${(props: { color: string; isInner?: boolean }) =>
    props.color};
  padding: ${(props: { color: string; isInner?: boolean }) =>
    props.isInner ? '0.7rem 1rem' : '1rem'};

  @media (max-width: 720px) {
    width: 4rem;
    justify-content: center;
    padding: 1rem 0rem;
  }
`;

export const InnerSectionLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

export const Icon = styled.img`
  height: ${(props: { isInner?: boolean }) =>
    props.isInner ? '0.4rem' : '2rem'};
  width: ${(props: { isInner?: boolean }) =>
    props.isInner ? '1.5rem' : '2rem'};
  margin-right: ${(props: { isInner?: boolean }) =>
    props.isInner ? '0rem' : '1rem'};

  @media (max-width: 720px) {
    align-self: 'center';
    margin-right: 0;
  }
`;

export const Title = styled.h5`
  font-size: 10pt;
  font-weight: 500;
  text-transform: capitalize;
  max-width: ${(props: { isInner?: boolean }) =>
    props.isInner ? '10rem' : '5rem'};
  text-align: left;
  color: var(--gray-strong);

  @media (max-width: 1280px) {
    font-size: 8pt;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const IconBack = styled.img`
  height: 0.55rem;
  width: 0.55em;
  margin: 0.5rem;

  @media (max-width: 720px) {
    display: none;
  }
`;
