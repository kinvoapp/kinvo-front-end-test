import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: start;
 
  
  height: 30px;
  background: #f7f7f7;

  img{ 
    display: block;
  }

   h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #707b81;
  }

  p {
    font-family: "Montserrat" ;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    align-items: start;
  }
  
  div{ 
    margin-left:10px;
    display: flex;
    align-items: start;
    flex-direction: column;
  }
`;
export default Container;
