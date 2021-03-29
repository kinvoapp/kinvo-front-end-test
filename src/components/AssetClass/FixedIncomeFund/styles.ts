import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 5.5rem 1.75rem 0 16rem;

  &.hidden {
    padding-left: 1.75rem;
  }

  @media (max-width: 720px) {
    padding-left: 1.75rem;
  }

  > h1 {
    margin: 1.6875rem 0 1.5rem 0;

    font-size: 1.25rem;
    color: ${({ theme }) => theme.text.purple};
    line-height: 1.8rem;
  }

  .infos {
    display: flex;
    gap: 0.75rem;
  }
`;
