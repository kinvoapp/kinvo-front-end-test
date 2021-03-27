import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 5.5rem 1.75rem 0 16rem;

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

  .chart {
    /* height: 21.75rem; */
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
  }
`;

export const Info = styled.div`
  height: 3.75rem;
  padding: 0.625rem 0.5rem;

  flex: 1;

  background: ${({ theme }) => theme.background.component};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.item};

  p {
    height: 100%;
    padding-left: 0.625rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${({ theme }) => theme.text.itemTitle};
    border-left: 2px solid ${({ theme }) => theme.icon.background};
    font-size: 0.5625rem;
    letter-spacing: 0.05em;

    strong {
      margin-top: 3px;

      font-size: 0.875rem;
      color: ${({ theme }) => theme.text.purple};
      letter-spacing: 0;
    }
  }
`;
