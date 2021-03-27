import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 5.5rem;
  padding: 0 1.75rem;
  z-index: 10;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.background.component};
  box-shadow: ${({ theme }) => theme.shadow.header};

  > img {
    height: 1.75rem;
    margin-right: 1.75rem;
  }

  .infos {
    height: 100%;
    margin-left: 1.25rem;
    padding-top: 1rem;

    align-self: flex-end;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    gap: 2.25rem;

    ::-webkit-scrollbar {
      height: 1rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.background.component};
    }

    ::-webkit-scrollbar-thumb {
      border: 3px solid ${({ theme }) => theme.background.component};
      background: ${({ theme }) => theme.background.focus};
      border-radius: 999px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.background.page};
    }
  }
`;

interface InfoProps {
  focus?: boolean;
}

export const Info = styled.div<InfoProps>`
  display: grid;
  grid-template-columns: auto max-content;
  grid-template-rows: max-content max-content;
  grid-template-areas: "img p" "img strong";

  div {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: 0.625rem;

    grid-area: img;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ focus, theme }) =>
      focus ? theme.icon.focusBackground : theme.icon.background};
    border-radius: 50%;
  }

  p {
    grid-area: p;

    font-size: 0.5rem;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.text.menu};
  }

  strong {
    grid-area: strong;

    font-size: 1rem;
    color: ${({ theme }) => theme.text.menu};
  }

  div:last-child {
    margin-right: 1.3125rem;
  }
`;
