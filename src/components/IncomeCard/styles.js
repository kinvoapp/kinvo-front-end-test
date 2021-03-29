import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Tag = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding: 5px 10px;
  font-size: 11px;
  z-index: 1;
  color: ${colors.blackText};
  margin-bottom: -1px;
  text-transform: uppercase;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid ${colors.white};
  border-top: 1px solid ${colors.grayBorder};
  border-left: 1px solid ${colors.grayBorder};
  border-right: 1px solid ${colors.grayBorder};
`;

export const Title = styled.span`
  margin-right: 10px;
  font-size: 9px;
`;

export const Body = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 0 10px 10px 10px;
  border: 1px solid ${colors.grayBorder};
  height: 100%;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;