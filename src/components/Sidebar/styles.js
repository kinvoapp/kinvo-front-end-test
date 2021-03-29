import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  width: 225px;
  height: 100%;
  overflow: auto;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #CCCFD1;
  color: #707B81;
  cursor: pointer;
  background-color: ${props => props.active ? '#F8FAFB' : 'unset'};

  &:hover {
    background-color: #F8FAFB;
  }
`;

export const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active ? colors.purple : colors.grayBorder};
  width: 34px;
  height: 34px;
  padding: 5px;
  border-radius: 50%;
`;

export const ItemPoint = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const Icon = styled.img`
  width: auto;
`;

export const ItemTitle = styled.span`
  text-transform: capitalize;
  padding: 0 15px;
  font-size: 13px;
  font-weight: 500;
  flex: 1;
`;