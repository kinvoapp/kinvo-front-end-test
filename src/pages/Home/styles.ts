import styled, { useTheme } from 'styled-components';

export const Container = styled.div`
  .content {
    display: flex;
    height: 100%;

    main {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem 1rem;
      width: 100%;

      > .title {
        font-size: 1.25rem;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`