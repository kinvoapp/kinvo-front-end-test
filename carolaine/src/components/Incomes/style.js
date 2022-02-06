import styled from "styled-components";

export const IncomesContainer = styled.div`
  background: var(--cor-fundo);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
  margin-top: 22px;
  overflow: hidden;
`;

export const SectionHeader = styled.div`
  padding: 15px 19px;
  border-bottom: 1px solid #eef2f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: #627179;
  font-size: 18px;
  margin: 0;
`;

export const Filter = styled.div`
  border: 1px solid #d6d9dd;
  border-radius: 10px;
  position: relative;
  min-width: 201px;
  font-size: 12px;

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    cursor: pointer;
  }

  ol {
    position: absolute;
    right: 0;
    margin-top: 5px;
    background: var(--cor-fundo);
    border: 1px solid #d6d9dd;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 8%);
    border-radius: 10px;
    width: 100%;
  }

  ol li {
    border-bottom: 1px solid #d6d9dd;
  }

  ol li:last-child {
    border-bottom: none;
  }
`;
export const FilterOption = styled.li`
  a {
    padding: 10px 9px;
    display: ${(props) => (props.filterTitle ? "flex" : "block")};
    justify-content: space-between;
    align-items: center;
    font-weight: ${(props) => (props.filterTitle ? "600" : "400")};
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  position: relative;

  input {
    border: 1px solid #d6d9dd;
    border-radius: 10px;
    width: 220px;
    font-size: 12px;
    padding: 10px 9px 10px 35px;
    font-family: "Montserrat";
    color: var(--cor-texto);
  }

  input:focus {
    outline: 2px solid var(--cor-realce-dois);
    outline-offset: -1px;
  }

  a {
    position: absolute;
    cursor: pointer;
    font-size: 15px;
    color: #9da5ac;
    margin: 3px 0 0 10px;
  }
`;

export const Pagination = styled.div`
  padding: 12px 10px 19px 10px;

  ul {
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }
`;

export const PaginationItem = styled.li`
  list-style: none;
  display: inline-block;
  margin: 0 2px 4px 2px;

  a {
    display: inline-block;
    padding: 9px 12px;
    border: 1px solid;
    border-color: ${(props) => (props.selected ? "#DCE0E3" : "#edeef0")};
    color: ${(props) => (props.selected ? "#fff" : "var(--cor-texto)")};
    font-size: 13px;
    min-width: 35px;
    text-align: center;
    border-radius: 5px;
    background: ${(props) => (props.selected ? "#DCE0E3" : "var(--cor-fundo)")};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 3%);
  }

  a svg {
    position: relative;
    top: 2px;
  }
`;
