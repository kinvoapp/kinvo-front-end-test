import styled from 'styled-components';

export const ProductLabel = styled.div`
  font-size: 12px;
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
  display: grid;
  font-family: "Helvetica";
  grid-template-columns: 1fr 1fr 3fr 3fr;
  align-items: center;
  color: #4c309b;
  height: 40px;
  position: relative;
  grid-gap: 50px;
  &:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 70%;
    border-radius: 15px;
    background-color: #4C309B;
  }
  border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
  padding: 0 15px;
`;

export const MiddleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const EndContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
