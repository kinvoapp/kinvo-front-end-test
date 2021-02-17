import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  background-color: #ffffff;
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
`;

export const TitleImg = styled.img`
  margin-left: 30px;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  display: flex;
  margin-right: 30px;
  height: 30px;
`;

export const IconCardHeader = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const DescriptionCardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleCardHeader = styled.span`
  font-size: 8px;
  color: #707b81;
`;

export const ValueCardHeader = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #707b81;
`;

export const MenuIconHeader = styled.img`
  margin-right: 50px;
  cursor: pointer;
`;

export const HeaderSubContainer = styled.div`
  display: flex;
`;
