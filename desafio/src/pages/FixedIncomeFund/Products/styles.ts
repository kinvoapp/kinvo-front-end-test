import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 0 25px 0;
  box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.04);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 0 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #627179;
  }
`;
