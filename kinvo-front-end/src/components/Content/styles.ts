import styled from 'styled-components';

export const Container = styled.div`

  position: absolute;
  left: 226px;
  top: 90px;
  right: 0;
  grid-area: content;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  color: #4E5B61;

  h3 {
    margin-bottom: 20px;
    color: #4C309B;  
  }

  div.container {
    display: flex;
    justify-content: space-between;
  }

`;

export const Card = styled.div`

  background-color: #FFFF;
  margin: 30px 10px;
  border-radius: 10px;
  padding: 16px 0; 
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  div.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 21px;
  }

  span {
    font-weight: 500;
    font-size: 18px;
  }

  /* div.separator {
    border-bottom: 1px solid #EEF2F4;
    margin: 20px 0;  
  } */
`;


