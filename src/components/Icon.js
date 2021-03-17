import styled from 'styled-components';

export const Icon = styled.div`
  width: 32px;
  height:32px;
  border-radius: 50%;
  margin-right: 8px;
  /* background: var(--border-card); */
  background: ${props => props.selected ? "var(--primary-color)" : "var(--border-card)"};
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  
`;