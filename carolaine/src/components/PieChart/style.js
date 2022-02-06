import styled from "styled-components";

export const Container = styled.div`
  background: var(--cor-fundo);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
  margin-top: 22px;
  overflow: hidden;
  height: fit-content;
`;

export const PageTitle = styled.h2`
  padding: 18px;
  color: #627179;
  margin: 0 0 30px 0;
  font-size: 18px;
  border-bottom: 1px solid #eef2f4;
`;

export const List = styled.ul`
  margin: 25px auto 0 auto;
  padding: 20px 20%;
  border-top: 1px solid #eef2f4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  position: relative;
  padding: 0 0 0 12px;

  &:before {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background: #dae0e3;
    left: 0;
    border-radius: 100%;
  }
`;
