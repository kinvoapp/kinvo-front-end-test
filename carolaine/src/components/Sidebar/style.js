import styled from "styled-components";

export const Aside = styled.aside`
  background: var(--cor-fundo);
  width: 22%;
`;

export const Lista = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;

  a {
    padding: 18px;
    display: flex;
    align-items: center;
    color: var(--cor-texto);
    border-bottom: 1px solid #cccfd1;
  }

  figure {
    display: flex;
    align-items: center;
  }

  img {
    width: 34px;
    height: 34px;
  }
`;

export const Texto = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 10px;
`;

export const Titulo = styled.span`
  font-size: 13px;
  font-weight: 600;
  display: block;
`;

export const Link = styled.span`
  min-width: 30px;
  text-align: right;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ItemLista = styled(Item)`
  padding: 0;

  a {
    background: #f8fafb;
  }
`;

export const SubLista = styled.ol`
  margin: 0;
  padding: 0;
`;

export const ItemSubLista = styled(Item)`
  a {
    background: ${(props) => (props.selected ? "#f8fafb" : "var(--cor-fundo)")};
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 15px 15px 15px 40px;
  }

  a:before {
    content: "";
    width: 6px;
    height: 6px;
    background: var(--cor-realce-um);
    border-radius: 100%;
    position: absolute;
    left: 0;
    margin: 0 0 0 23px;
  }
`;
