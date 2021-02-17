import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 16px 20px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const InputSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 32px;
  background-color: #ffffff;
  border: 1px solid #d6d9dd;
  border-radius: 10px;
  padding: 8px;

  @media (min-width: 1750px) {
    width: 280px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 8px;
  font-size: 12px;
  color: #4e5b61;
`;

export const InputSearchIcon = styled.img``;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #627179;
`;

export const HeaderFlexContainer = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin-top: 41px;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 372px;
  height: 77px;
  border-radius: 10px;
  border: 1px solid #dae0e3;
  padding: 10px;
  margin-right: 10px;
`;

export const CardPosition = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 459px;
  height: 77px;
  border-radius: 10px;
  border: 1px solid #dae0e3;
  padding: 10px;
`;

export const CardDueDate = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 230px;
  height: 77px;
  border-radius: 10px;
  border: 1px solid #dae0e3;
  padding: 10px;
  margin-left: 10px;
`;

export const CardHeader = styled.header`
  width: 100%;
  display: flex;
`;

export const InformationIconImg = styled.img`
  margin-left: 11px;
`;

export const CardSpan = styled.span`
  font-size: 9px;
  font-weight: 500;
  color: #4e5b61;
`;

export const CardTitleSpan = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #8a51ba;
`;

export const CardTitleDescription = styled.span`
  width: 190px;
  font-size: 12px;
  font-weight: 500;
  color: #4e5b61;
`;

export const CardPositionSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #38bfa0;
`;

export const CardDueDateSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #008dcb;
`;

export const CardFlexContent = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;

export const CardFlexContentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  padding: 30px 10px 10px 10px;
`;
