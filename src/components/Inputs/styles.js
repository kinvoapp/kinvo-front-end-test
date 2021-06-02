import styled from "styled-components";

export const FilterSelectContainer = styled.div`
  select {
    width: 155px;
    height: 32px;
    border: 1px solid var(--gray);
    border-radius: 10px;
    color: var(--text);
  }
`;

export const FilterInputContainer = styled.div`
  width: 240px;
  height: 32px;

  display: flex;
  align-items: center;
  padding: 10px;

  position: relative;

  input[type="text"] {
    width: 240px;
    height: 32px;
    border: 1px solid var(--gray);
    border-radius: 10px;

    position: absolute;
    left: 0;

    text-indent: 30px;
  }

  img {
    width: 15px;
    height: 15px;
    z-index: 1;
  }
`;
