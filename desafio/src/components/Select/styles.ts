import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 9px 10px;
  border: 1px solid #d6d9dd;

  select {
    flex: 1;
    border: 0;
    background: transparent;
    color: #707b81;
    font-size: 12px;
    font-weight: 500;

    option {
      color: #707b81;
      font-size: 12px;
      font-weight: 500;
    }
  }

  img {
    margin-right: 16px;
  }
`;
