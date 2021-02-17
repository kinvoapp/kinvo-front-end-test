import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const CardFlexContainer = styled.div`
  display: flex;
`;

export const CardFlexSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9px;
`;

export const Card = styled.div`
  width: 173px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 10px 8px 10px 8px;
  margin-right: 16px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const CardDescription = styled.span`
  color: #4e5b61;
  font-size: 9px;
  font-weight: 500;
`;

export const CardValue = styled.span`
  color: #4c309b;
  font-size: 14px;
  font-weight: 700;
`;

export const CardIcon = styled.img``;
