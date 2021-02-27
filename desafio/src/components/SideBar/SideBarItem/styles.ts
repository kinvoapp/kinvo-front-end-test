import styled, { css } from 'styled-components';

interface ContainerProps {
  isExpanded: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: #f8fafb;

  button {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    border: none;
    background: none;
    padding: 17px 15px;
    border-bottom: 0.5px solid rgba(204, 207, 209, 0.4);
    background-color: #fff;

    ${props =>
      props.isExpanded &&
      css`
        background-color: #f8fafb;
      `}

    div {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const Title = styled.h1`
  margin-left: 14px;
  font-size: 13px;
  font-weight: 500;
  width: 40%;
  text-align: left;
  color: #707b81;
`;

export const Icon = styled.img`
  width: 34px;
  height: auto;
`;
