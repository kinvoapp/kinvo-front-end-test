import styled from 'styled-components';

export const Wrapper = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  background-color: #FFF;
  box-shadow: 0 0 0.5rem rgba(112, 123, 129, 0.1);

  img.kinvo { 

    margin-left: 28px;
  }

  div {

    display: flex;
    justify-content: space-between;
    margin-right: 30px;

    button {

      border: none;
      background-color: none;
      border-radius: 50%;
      background-color: #FFFF;
    }
    
  }
`;

export const HeaderOption = styled.div`

  
  div {

    display: flex;
    flex-direction: column;
    margin-left: 20px;

    strong {
      font-size: 16px;
    }

    p {
      font-size: 8px;
    }

    strong,p { 
      color: #707B81;
    }

  }

`;