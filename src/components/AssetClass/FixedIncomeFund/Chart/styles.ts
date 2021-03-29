import styled from "styled-components";

export const Container = styled.section`
  margin: 1.3125rem 0 1.6875rem 0;
  padding: 1.125rem 1.25rem;

  background: ${({ theme }) => theme.background.component};
  box-shadow: ${({ theme }) => theme.shadow.section};
  border-radius: 10px;

  h2 {
    color: ${({ theme }) => theme.text.sectionTitle};
    font-size: 1.125rem;
    font-weight: 500;
  }

  div {
    margin-top: 1.875rem;
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: auto max-content;
    grid-template-areas: "y-axis chart" "empty x-axis";

    .axis {
      font-size: 0.6875rem;
      color: ${({ theme }) => theme.text.menu};
    }

    .y {
      margin: -0.34375rem 0.5625rem -0.34375rem 0;
      grid-area: y-axis;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      justify-content: space-between;
    }

    img {
      grid-area: chart;
      height: 100%;
      width: 100%;
    }

    .x {
      margin: 0.875rem 0;
      grid-area: x-axis;
      display: flex;
      justify-content: space-around;
    }
  }
`;
