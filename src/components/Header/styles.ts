import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 5.5rem;
  padding: 0 1.75rem;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.background.component};
  box-shadow: ${({ theme }) => theme.shadow.header};

  .infos {
    display: flex;
    gap: 2.25rem;
  }
`;

interface InfoProps {
  focus?: boolean;
}

export const Info = styled.div<InfoProps>`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
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
      focus ? theme.icon.focusbackground : theme.icon.background};
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
