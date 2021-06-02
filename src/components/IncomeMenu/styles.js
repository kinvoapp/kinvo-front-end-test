import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 20px;

  // border: 1px solid red;
`;

export const Item = styled.div`
  width: 173px;
  height: 60px;
  box-shadow: 0px 2px 20px #0000000d;
  background: var(--white);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemCallout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-left: 2px solid var(--gray);
  width: 100%;

  margin: 0 10px;

  //  border: 1px solid red;

  span,
  strong {
    margin-left: 10px;
  }

  span {
    font-weight: 500;
    font-size: 11px;
  }

  strong {
    color: var(--purpleDark);
    font-size: 15px;
  }
`;
