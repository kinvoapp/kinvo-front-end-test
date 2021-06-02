import styled from "styled-components";

export const MyFixedIncomesContainer = styled.div`
  width: auto;
  background: var(--white);
  margin-top: 10px;

  max-width: 1090px;

  border-radius: 10px;
`;

export const MyFixedIncomesHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray);
  h1 {
    color: var(--textDark);
    font-weight: 500;
    font-size: 18px;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export const MyFixedIncomesBody = styled.div`
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const MyFixedIncomesRow = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const FixedIncomeTitle = styled.div`
  // border: 1px solid red;
  min-width: auto;
  max-width: ${({ minus }) => (minus ? "350px" : "auto")};

  position: relative;

  //  border: 1px solid red;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    background: var(--white);
    top: -16px;
    //border: 1px solid blue;

    border-radius: 10px 10px 0 0;
    border-top: 1px solid var(--gray);
    border-left: 1px solid var(--gray);
    border-right: 1px solid var(--gray);

    span,
    img {
      padding: 6px 10px;

      font-size: 9px;
      font-weight: 500;
    }
  }

  .title-body {
    border: 1px solid var(--gray);
    border-radius: 0 8px 8px 8px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    strong {
      font-size: 11px;
      max-width: 50%;
      color: var(--text);
    }

    .class {
      display: flex;
      flex-direction: column;
      padding-right: 20px;

      span {
        font-size: 9px;
        font-weight: 500;
      }

      strong {
        color: var(--purple);
        font-size: 14px;
        white-space: nowrap;
      }
    }

    .class-green {
      display: flex;
      flex-direction: column;
      padding-right: 20px;
      white-space: nowrap;

      span {
        font-size: 9px;
        font-weight: 500;
      }

      strong {
        color: var(--green);
        font-size: 14px;
        white-space: nowrap;
      }
    }

    .class-blue {
      display: flex;
      flex-direction: column;
      padding-right: 20px;
      white-space: nowrap;

      span {
        font-size: 9px;
        font-weight: 500;
      }

      strong {
        color: var(--blue);
        font-size: 14px;
        white-space: nowrap;
      }
    }
  }
`;
