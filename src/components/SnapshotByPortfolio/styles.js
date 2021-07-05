import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 0 7px;
    height: 60px;

    span {
      display: inline-block;
      width: 2px;
      height: 39px;
      background-color: #dae0e3;
      margin-right: 7px;
    }

    & + div {
      margin-left: 10px;
    }
  }
`;

export const Value = styled.h1`
  font-size: 14px;
  font-weight: bold;
  color: #4c309b;
  margin: 0;
  padding: 0;

  &:before {
    content: '${(props) => props.title}';
    display: block;
    padding: 0;
    margin: 0 0 3px 0;
    font-size: 9px;
    font-weight: 500;
    text-transform: uppercase;
    color: #4e5b61;
  }
`;
