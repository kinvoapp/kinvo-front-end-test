import styled from 'styled-components';


export const Info = styled.div`

  background-color: #FFFF;

  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;

  display: flex;
  width: 15%;
  height: 60px;

  justify-content: flex-start;
  
  
  
  
  div.info {
    display: flex;
    flex-direction: column;

    align-self: center;

    span {
      font-size: 9px;
    }

    strong {
      font-size: 14px;
      color: #4C309B; 
    }
    
  }

`;

export const Tag = styled.span`
  
  background-color: #DAE0E3;
  border-radius: 10px;
  width: 2px;
   
  margin-right: 10px;
`;
