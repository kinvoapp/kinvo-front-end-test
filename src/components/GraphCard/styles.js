import styled from "styled-components";

export const GraphCard = styled.div`
  height: 465px;
  background: var(--white);
  border-radius: 10px;

  flex: 1;
`;

export const GraphCardTitle = styled.div`
  border-bottom: 1px solid var(--gray);
  padding: 20px;

  h1 {
    color: var(--text);
    font-size: 18px;
    font-weight: bold;
  }
`;

export const GraphCardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray);
`;

export const GraphCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  font-size: 12px;
  font-weight: bold;

  ul {
    margin-left: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 70px;
    grid-row-gap: 10px;
  }
`;
