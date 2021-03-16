import styled, { keyframes, css } from "styled-components";

const bouncer = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }

`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100px;
  height: 100px;
  margin: 40px auto;

  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: ${bouncer} 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite
      alternate;

    ${({ theme }) => css`
      background-color: ${theme.colors.purpleDark};
    `}
  }

  div:nth-child(2) {
    animation-delay: 0.1s;
    opacity: 0.8;
  }

  div:nth-child(3) {
    animation-delay: 0.2s;
    opacity: 0.6;
  }

  div:nth-child(4) {
    animation-delay: 0.3s;
    opacity: 0.4;
  }
`;
