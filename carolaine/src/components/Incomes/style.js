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
  width: 201px;
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

export const SearchForm = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 10px;

  input {
    border: 1px solid #d6d9dd;
    border-radius: 10px;
    padding: 10px 9px 10px 35px;
    width: 215px;
  }

  input:focus {
    outline: 2px solid var(--cor-realce-dois);
    outline-offset: -1px;
  }

  svg {
    position: absolute;
    left: 10px;
    font-size: 15px;
    color: #9da5ac;
    cursor: pointer;
  }
`;
