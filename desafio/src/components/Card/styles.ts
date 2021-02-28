import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #dae0e3;
  border-radius: 10px;
  padding: 9px 10px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  img {
    margin-left: 10px;
  }

  h5 {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    color: #4e5b61;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
