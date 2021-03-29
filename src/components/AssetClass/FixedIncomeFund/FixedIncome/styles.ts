import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.section`
  margin-top: 1.3125rem;
  padding: 1.125rem 1.25rem;

  background: ${({ theme }) => theme.background.component};
  box-shadow: ${({ theme }) => theme.shadow.section};
  border-radius: 10px;

  footer {
    margin-top: 0.75rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const Header = styled.header`
  margin-bottom: 0.75rem;

  display: grid;
  grid-template-columns: auto max-content max-content;

  h2 {
    color: ${({ theme }) => theme.text.sectionTitle};
    font-size: 1.125rem;
    font-weight: 500;
  }

  div,
  label {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.text.menu};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.border.box};
  }

  div {
    width: 9.75rem;
    padding: 0.5rem 0.625rem;
  }

  label {
    margin-left: 1.125rem;
    padding: 0.5rem;

    display: flex;

    input {
      all: unset;

      height: 100%;
      width: 100%;
      margin-left: 0.5rem;

      cursor: text;
    }
  }
`;

interface ItemProps {
  isDark: boolean;
}

export const Item = styled.li<ItemProps>`
  margin: 0 -1.25rem;
  padding: 1.25rem;

  display: flex;
  gap: 0.75rem;

  background: ${({ isDark, theme }) =>
    !isDark ? theme.background.component : theme.background.focus};

  section {
    display: flex;
    flex-direction: column;

    h3 {
      width: max-content;
      margin-top: -1px;
      padding: 0.5rem;
      padding-bottom: calc(0.5rem + 1px);

      display: flex;
      align-items: center;
      gap: 2rem;

      letter-spacing: 0.05em;
      font-size: 0.5625rem;
      font-weight: 500;
      color: ${({ theme }) => theme.text.itemTitle};
      background: ${({ isDark, theme }) =>
        !isDark ? theme.background.component : theme.background.focus};
      border: 1px solid ${({ theme }) => theme.icon.background};
      border-bottom: none;
      border-radius: 10px 10px 0 0;
      transform: translateY(1px);
    }

    main {
      height: 100%;
      padding: 0.5rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border: 1px solid ${({ theme }) => theme.icon.background};
      border-radius: 0 10px 10px 10px;

      p {
        max-width: 10rem;

        font-size: 0.75rem;
        color: ${({ theme }) => theme.text.itemTitle};
      }

      h4 {
        display: flex;
        flex-direction: column;

        letter-spacing: 0.05em;
        line-height: 1.8em;
        font-size: 0.5625rem;
        color: ${({ theme }) => theme.text.itemTitle};
        font-weight: 500;

        strong {
          letter-spacing: 0;
          font-size: 0.875rem;
          font-weight: 500;
        }
      }
    }
  }

  .fixed-income {
    flex-grow: 3;

    strong {
      color: ${({ theme }) => theme.text.pink};
    }
  }

  .position {
    flex-grow: 6;

    strong {
      color: ${({ theme }) => theme.text.green};
    }
  }

  .due {
    flex-grow: 1;

    strong {
      color: ${({ theme }) => theme.text.blue};
    }
  }
`;

interface NavigatorProps {
  selected?: boolean;
}

export const Navigator = styled.div<NavigatorProps>`
  width: 2.25rem;
  height: 2.25rem;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.background.navigator : theme.border.navigator};
  border-radius: 4px;
  background: ${({ selected, theme }) =>
    selected ? theme.background.navigator : theme.background.component};
  box-shadow: ${({ theme }) => theme.shadow.navigator};
  font-weight: ${({ selected }) => (selected ? "700" : "400")};
  color: ${({ selected, theme }) =>
    selected ? theme.background.component : theme.text.navigator};

  :hover {
    background: ${({ selected, theme }) =>
      selected
        ? darken(0.025, theme.background.navigator)
        : darken(0.025, theme.background.component)};
  }
`;
