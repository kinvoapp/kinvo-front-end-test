import styled from "styled-components";

export const Wrapper = styled.aside`
  width: 227px;
  height: auto;
  background: var(--white);
`;

export const Item = styled.li`
  width: 227px;
  height: ${({ normalize }) => (normalize ? "67px" : "47px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background: var(--white);

  border-bottom: 1px solid var(--gray);

  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: var(--gray);
  }
`;

export const ItemContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  font-size: 14px;
  font-weight: 500;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Pointer = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--purple);
  margin-left: 10px;
`;
