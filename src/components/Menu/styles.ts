import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.nav`
  width: 15.25rem;
  height: 100vh;
  margin-top: 5.5rem;
  z-index: 5;

  overflow-y: scroll;
  position: fixed;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.background.component};

  &.visible {
    animation-name: to-visible;
    animation-duration: 0.3s;
    animation-timing-function: ease;
  }

  @keyframes to-visible {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  &.hidden {
    animation-name: to-hidden;
    animation-duration: 0.3s;
    animation-timing-function: ease;
    transform: translateX(-100%);
  }

  @keyframes to-hidden {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background.page};
  }

  ::-webkit-scrollbar-thumb {
    border: 3px solid ${({ theme }) => theme.background.page};
    background: ${({ theme }) => theme.background.focus};
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.background.component};
  }

  @media (max-width: 720px) {
    ::-webkit-scrollbar-track {
      background: #d7dadc;
    }

    ::-webkit-scrollbar-thumb {
      border: 3px solid #d7dadc;
    }
  }
`;

interface TabProps {
  focus?: boolean;
}

export const Tab = styled.li<TabProps>`
  cursor: pointer;
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: 4.25rem auto;
  grid-template-areas: "icon title arrow" "ul ul ul";
  column-gap: 1rem;
  align-items: center;

  background: ${({ focus, theme }) =>
    focus ? theme.background.focus : theme.background.component};
  border-bottom: 1px solid ${({ theme }) => theme.border.menu};

  div {
    width: 2.125rem;
    height: 2.125rem;
    margin-left: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ focus, theme }) =>
      focus ? theme.icon.focusBackground : theme.icon.background};
    border-radius: 50%;

    img {
      max-width: 1.25rem;
      max-height: 1.25rem;
    }
  }

  p {
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.text.menu};
  }

  > img {
    margin-right: 1rem;
  }

  ul {
    grid-area: ul;
    list-style: none;
    display: ${({ focus }) => !focus && "none"};

    background: ${({ theme }) => theme.background.component};
  }

  :hover {
    background: ${({ focus, theme }) =>
      darken(
        0.025,
        focus ? theme.background.focus : theme.background.component
      )};

    div {
      background: ${({ focus, theme }) =>
        darken(
          0.05,
          focus ? theme.icon.focusBackground : theme.icon.background
        )};
    }
  }
`;

export const SubTab = styled.li<TabProps>`
  height: 3rem;
  padding: 0 1rem 0 1.5rem;

  cursor: pointer;
  display: grid;
  grid-template-columns: min-content auto min-content;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.border.menu};
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.menu};
  background: ${({ focus, theme }) =>
    focus ? theme.background.focus : theme.background.component};

  ::before {
    margin-right: 0.625rem;

    content: "•";
    display: inline-block;

    color: ${({ theme }) => theme.icon.focusBackground};
    font-weight: bold;
    font-size: 1.5rem;
  }

  :hover {
    background: ${({ focus, theme }) =>
      darken(
        0.025,
        focus ? theme.background.focus : theme.background.component
      )};
  }
`;

export const Film = styled.div`
  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    position: absolute;

    background: #00000019;
  }
`;
