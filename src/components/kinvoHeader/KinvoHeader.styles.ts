import styled from 'styled-components';

export const HEADER_HEIGHT = 90;

export const Container = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.theme.colors.white};
  height: ${HEADER_HEIGHT}px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
`;

export const Informations = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  & + div {
    margin-left: 32px;
  }
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.grey700};
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Value = styled.div`
  color: ${props => props.theme.colors.grey700};
  font-size: 1.6rem;
  line-height: 1.9rem;
  font-weight: bold;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Menu = styled.div`
  width: 32px;
  height: 32px;

  transition: filter 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
