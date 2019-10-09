import styled from 'styled-components';

export const Product = styled.div`
  display: grid;
  font-family: "helvetica-neue, arial";
  grid-template-columns: repeat(8, 1fr);
  color: #4c309b;
  height: 40px;
`;

export const ProductLabel = styled.div`
  font-size: 12px;
`;

export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.2);
`;

export const SmallSetOfInfo = styled.div`
  align-items: center;
`;

export const SmallSetOfInfoLabel = styled.div`
  font-size: 8px;
`;

export const SmallSetOfInfoValue = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const Container = styled.section`
  margin: 0 2%;
  border-left: 4px solid #4c309b;
  border-radius: 3px;
`;
