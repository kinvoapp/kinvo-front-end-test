import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: 0px 3px 5px #CCCCCC80;
  padding: 0 20px;
  height: 80px;
  width: 100%;
  z-index: 1;
`;

export const Logo = styled.img`
  max-width: 180px;
  width: 100%;
`;

export const Icon = styled.img`
  max-width: 30px;
  max-height: 30px;
  width: 100%;
  height: 100%;
  cursor: ${props => props.clickable ? 'pointer' : 'default' };
`;

export const InfoList = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const InfoText = styled.div`
  color: #627179;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 8px;
`;

export const Subtitle = styled.span`
  font-weight: 700;
  font-size: 16px;
`;