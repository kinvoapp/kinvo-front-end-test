import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 10px;
  background: white;
  padding: 10px 8px;
  flex: 1;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 5%);
  div {
    position: relative;
    padding: 5px 0 5px 10px;
    &:before {
      content: '';
      width: 2px;
      height: 100%;
      background: #dae0e3;
      border-radius: 50px;
      position: absolute;
      top: 0;
      left: 0;
    }
    h3 {
      font-weight: 400;
      font-size: 9px;
      margin-bottom: 2px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }
    p {
      font-weight: 700;
      font-size: 14px;
      color: #4c309b;
    }
  }
`;
