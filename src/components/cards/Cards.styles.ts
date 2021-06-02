import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 16px;
`;

export const Info = styled.div`
  border-left: 2px solid ${props => props.theme.colors.grey200};
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.div`
  letter-spacing: 0.45px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.grey700};
  font-size: 1.2rem;
`;

export const Value = styled.div`
  padding-top: 4px;
  color: ${props => props.theme.colors.purple700};
  font-size: 1.4rem;
  font-weight: bold;
`;
