import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  border-bottom: ${props => props.border ? '2px solid #EEF2F4' : 'none' };
  flex: 1;
  align-items: center;
`;

export const CardFooter = styled.div`
  display: flex;
  border-top: ${props => props.border ? '2px solid #EEF2F4' : 'none' };
  flex: 1;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  color: #627179;
  font-size: 18px;
  font-weight: 500;
  padding: 15px;
`;