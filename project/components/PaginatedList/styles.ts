import styled from "styled-components";

export const Container = styled.div``;

type PageButtonProps = {
  isActive?: boolean;
};

export const PageButton = styled.button<PageButtonProps>`
  height: 35px;
  width: 35px;
  margin: 0 6px;
  background: ${(p) => (p.isActive ? "#DCE0E3" : "#FFFFFF")};
  border: 1px solid #edeef0;
  border-radius: 8px;

  :hover {
    cursor: pointer;
  }
`;
