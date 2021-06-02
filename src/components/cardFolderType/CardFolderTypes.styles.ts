import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: inline-flex;

  flex-direction: column;
  & + div {
    margin-left: 15px;
  }

  width: 100%;
  &:first-child {
    max-width: 410px;
  }

  &:last-child {
    max-width: 240px;
  }
`;

export const Header = styled.header`
  width: 45%;
  /* width: auto; */
  position: relative;
  display: flex;
  top: 1px;
  padding: 12px 15px;
  border-top: 1px solid ${props => props.theme.colors.grey400};
  border-left: 1px solid ${props => props.theme.colors.grey400};
  border-right: 1px solid ${props => props.theme.colors.grey400};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: ${props => props.theme.colors.white};
  word-break: break-all;

  p {
    width: 100%;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 1rem;
    color: ${props => props.theme.colors.grey700};
    letter-spacing: 0.45px;
  }
`;

export const ContentBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  padding: 15px;
  border: 1px solid ${props => props.theme.colors.grey400};
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${props => props.theme.colors.white};

  p {
    margin-bottom: 0;
  }
`;

export const ContentField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & + div {
    padding-left: 28px;
  }
`;

export const Name = styled.div`
  max-width: 204px;
  font-size: 1rem;
  color: ${props => props.theme.colors.grey700};
`;

export const Value = styled.div`
  padding-top: 4px;
  ${props =>
    props.type === 'class' &&
    css`
      color: ${props => props.theme.colors.purple700};
    `}

  ${props =>
    props.type === 'position' &&
    css`
      color: ${props => props.theme.colors.green700};
    `}

    ${props =>
    props.type === 'dueDate' &&
    css`
      color: ${props => props.theme.colors.blue700};
    `}
`;

export const TitleName = styled.div`
  max-width: 204px;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.grey700};
`;
