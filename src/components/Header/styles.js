import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;

  background: var(--white);
  height: 90px;

  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  padding: 0 30px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const ItemsContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 9px;
    }
  }
`;
