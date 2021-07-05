import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 500px;
`;

export const Item = styled.div`
  display: flex;
  padding: 20px;
  background-color: #ffffff;

  &:nth-child(even) {
    background-color: #f8fafb;
  }

  & + div {
    border-top: 1px solid #dae0e3;
  }

  div {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #dae0e3;

    &:first-of-type {
      > h2 {
        display: flex;
        align-items: center;
        font-size: 9px;
        text-transform: uppercase;
        color: #4e5b61;
        margin: 0;
        padding: 0;

        svg {
          padding-left: 10px;
        }
      }

      section {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h2 {
          max-width: 180px;
          font-size: 12px;
          font-weight: 500;
          color: #4e5b61;
          line-height: 16px;
          margin: 0;
          padding: 0;
          margin-right: 95px;
        }
      }
    }
    &:nth-of-type(2) {
      flex: 1;
      margin: 0 10px;

      > h2 {
        display: flex;
        align-items: center;
        font-size: 9px;
        text-transform: uppercase;
        color: #4e5b61;
        margin: 0;
        padding: 0;

        svg {
          padding-left: 10px;
        }
      }

      section {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          & + h3 {
            margin-left: 17px;
          }
        }
      }
    }

    &:last-of-type {
      > h2 {
        display: flex;
        align-items: center;
        font-size: 9px;
        text-transform: uppercase;
        color: #4e5b61;
        margin: 0;
        padding: 0;

        svg {
          padding-left: 10px;
        }
      }

      section {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          & + h3 {
            margin-left: 17px;
          }
        }
      }
    }
  }
`;

export const Result = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.color};
  margin: 0;
  padding: 0;

  &:before {
    content: '${(props) => props.text}';
    text-transform: uppercase;
    font-size: 9px;
    color: #4e5b61;
    display: block;
  }
`;

export const Navigation = styled.footer`
  padding: 10px 10px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eef2f4;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    border: 1px solid #edeef0;
    background-color: white;
    border-radius: 5px;
    font-size: 13px;
    color: #c2c5cc;
    cursor: pointer;

    &.left {
      transform: rotate(90deg);
    }

    &.right {
      transform: rotate(-90deg);
    }

    &.active {
      background-color: #dce0e3;
      font-size: 13px;
      font-weight: bold;
      color: #ffffff;
    }

    & + button {
      margin-left: 10px;
    }
  }

  span {
    & + span {
      margin-left: 10px;
      border-radius: 5px;
    }
  }
`;
