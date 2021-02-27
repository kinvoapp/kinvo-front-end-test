import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: #fff;
  align-items: center;
  min-width: 120px;
  padding: 10px 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.04);

  & + div {
    margin-left: 15px;
  }
`;

export const Content = styled.div`
  border-left: 2px solid #dae0e3;
  height: 100%;
  padding: 3px 0;
`;

export const Title = styled.h1`
  margin-left: 10px;
  font-size: 9px;
  font-weight: 500;
  color: #4e5b61;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const Value = styled.h3`
  margin: 3px 10px 0 10px;
  font-size: 14px;
  font-weight: bold;
  color: #4c309b;
`;
