import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--white);
  height: 5rem;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 1.5rem;
  align-items: center;
  z-index: 99999;
  box-shadow: -1px 2px 11px -1px rgba(0, 0, 0, 0.06);
`;

export const Logo = styled.img`
  width: 11rem;
  height: 3rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Options = styled.div`
  display: flex;
  @media (max-width: 920px) {
    display: none;
    flex-direction: column;
  }
`;

export const SingleOptionContainer = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1.5rem;
  display: flex;

  @media (max-width: 920px) {
    margin: 1rem 0 0 0;
    flex-direction: row;
    display: ${(props: { show: boolean }) => (props.show ? 'flex' : 'none')};
    border-bottom: 0.01rem solid var(--light-gray);
  }
`;

export const SingleOptionIcon = styled.img`
  height: 2rem;
  width: 2rem;
  margin: 0.5rem;
`;

export const SingleOptionTextContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SingleOptionTitle = styled.h5`
  font-size: 6pt;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--gray-strong);

  @media (max-width: 920px) {
    font-size: 5pt;
  }
`;

export const SingleOptionValue = styled.h2`
  font-size: 11pt;
  font-weight: 700;
  color: var(--gray-strong);

  @media (max-width: 920px) {
    font-size: 8pt;
  }
`;

export const SideMenu = styled.div`
  height: 100%;
  background-color: var(--white-opacity);
  flex-direction: column;
  right: 0;
  position: fixed;
  padding: 0rem 1rem;
  padding-top: 5rem;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  visibility: visible;
  transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
  display: none;

  @media (max-width: 920px) {
    display: ${(props: { show: boolean }) => (props.show ? 'flex' : 'none')};
  }
`;

export const Button = styled.button`
  display: flex;
`;
