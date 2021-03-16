import styled from 'styled-components';

export const Container = styled.div`
  padding: 21px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #EEF2F4;

  :nth-child(odd) {
    background-color: #F8FAFB;
  }

  span.title {
    display: flex;
    font-size: 9px;  
  }

  button {
    background: #FFFF;
    border: none;
    margin-left: 10px;
  }
`;

export const FixedIncome = styled.div`

  border: 1px solid #DAE0E3;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 23.125rem;
  

  span.product {
    font-size: 12px;
    max-width: 160px;
  }
`;

export const ProductInfoContainer = styled.div`

  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 12px;

    span.class {
      font-size: 9px;
      color: #4E5B61;
    }

    span.producttype, span.positiontype, span.duetype {
      font-size: 14px;
      font-weight: bold;
    }
    
    span.producttype {

      color: #8A51BA;
    }
    span.positiontype {
      color: #38BFA0;
    }
    span.duetype {
      color: #008DCB;
    }
  }
`;


export const Position = styled.div`
  border: 1px solid #DAE0E3;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 28.75rem;
`;

export const Due = styled.div`
  border: 1px solid #DAE0E3;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const PaginationMenu = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
 

`;
