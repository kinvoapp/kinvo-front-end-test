import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  box-shadow: ${props => props.theme.shadows.medium};
  z-index: -1;
  .divider {
    height: 40px;
    width: 2px;
    background-color: ${props => props.theme.colors.gray[250]};
    border-radius: 99px;
    margin-right: 0.5rem;
  }
  .content {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 0.563rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
      text-transform: uppercase;
      color: ${props => props.theme.colors.gray[500]};
    }

    .description {
      font-size: 0.875rem;
      color: ${props => props.theme.colors.primary};
      font-weight: 900;
    }
  }
`