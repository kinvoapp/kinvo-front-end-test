import styled from 'styled-components';

export const Container = styled.div`
  height: 65px;
  width: 100%;
  border-top: 1px solid #eee;

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
    background-color: #ECECEC;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding-right: 80px;
  
  h1 {
    
    font-size: 14px;
    font-weight: normal;
    color: #707b81;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  padding-right: 40px;
  
  h1 {
    
    font-size: 14px;
    font-weight: normal;
    color: #707b81;
  }
`;

export const Icon = styled.div`
  min-height: 35px;
  min-width: 35px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #dae0e3;
`;

export const SubIcon = styled.div`
  min-width: 15px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #white;

`;
