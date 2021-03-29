import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const PortfolioContainer = styled.div`
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
