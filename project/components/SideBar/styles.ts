import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  min-height: 100%;
  width: 227px;
  flex-shrink: 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

type ListItemContainerProps = {
  isActive?: boolean;
  height?: string;
  bullet?: boolean;
};
export const ListItemContainer = styled.li<ListItemContainerProps>`
  ${(p) => p.isActive && `background: #F8FAFB;`}
  height: ${(p) => p.height ?? `67px`};
  border-bottom: 0.5px solid #cccfd1;

  position: relative;

  ${(p) =>
    p.bullet &&
    `
      ::before {
        background-color: #4C309B;
        border-radius: 100%;
        content: "";
        display: block;
        height: 6px;
        left: 15px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
      }
  `}
`;

export const ListItemLink = styled.a`
  align-items: center;
  display: flex;
  padding: 15px;

  span.label {
    color: #707b81;
    font-size: 13px;
    margin: 0 15px;
    flex-grow: 1;
  }

  :hover {
    cursor: pointer;
  }
`;
