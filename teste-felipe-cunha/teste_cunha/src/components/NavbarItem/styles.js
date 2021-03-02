import styled from 'styled-components';

export const Container = styled.div`

  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;
    padding: 0 10px;
  }

  a.active {
    .icon-box {
      background: #5d41ac;
    }
  }
`;

export const Title = styled.div`
  width: 140px;
  
  h1 {
    margin-left: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #707b81;
  }

  h5 {
    margin-left: 20px;
    font-size: 8px;
    font-weight: normal;
    color: #707b81;
  }
`;

export const Icon = styled.div`
  min-height: 35px;
  min-width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #dae0e3;
`;
