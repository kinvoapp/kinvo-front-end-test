import styled from "styled-components";

export const Container = styled.section`
  margin-top: 0.375rem;

  display: flex;
  gap: 0.75rem;

  section {
    margin-bottom: 2rem;

    flex: 1;

    border-radius: 10px;
    background: ${({ theme }) => theme.background.component};

    h2 {
      padding: 1rem 1.25rem;

      color: ${({ theme }) => theme.text.sectionTitle};
      font-size: 1.125rem;
      font-weight: 500;
      border-bottom: 1px solid ${({ theme }) => theme.background.page};
    }

    main {
      width: 100%;
      padding: 1rem 0;

      display: flex;
      justify-content: center;
    }

    ul {
      padding: 1.375rem 3.5rem;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      list-style: none;
      font-size: 0.75rem;
      line-height: 1.5em;
      color: ${({ theme }) => theme.text.sectionTitle};
      border-top: 1px solid ${({ theme }) => theme.background.page};

      li {
        display: flex;

        ::before {
          margin-top: 2px;
          margin-right: 0.25rem;

          content: "•";
          display: inline-block;

          color: ${({ theme }) => theme.icon.background};
          font-weight: bold;
          font-size: 1.75rem;
          line-height: 0.5rem;
        }
      }
    }
  }
`;
