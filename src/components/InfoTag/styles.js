import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 2px solid ${colors.grayBorder};
  padding: 8px;
  margin: 8px;
`;

export const Title = styled.span`
  color: ${colors.blackText};
  font-size: 9px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: 0.45px;
`;

export const Subtitle = styled.span`
  color: ${colors.purple};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 2px;
`;