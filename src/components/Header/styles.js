import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0 50px 0 28px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Value = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.cursorPointer ? 'pointer' : 'default')};

  & + div {
    margin-left: 30px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.color ? props.color : '#DAE0E3')};
    border-radius: 50%;
    margin-right: 10px;
  }

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: #707b81;
    margin: 0;
    padding: 0;

    &:before {
      content: '${(props) => props.title}';
      display: block;
      font-size: 8px;
      text-transform: uppercase;
      color: #707b81;
      font-weight: ${(props) => (props.bold ? '600' : '400')};
    }
  }
`;
