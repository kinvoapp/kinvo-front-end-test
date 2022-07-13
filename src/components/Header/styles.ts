import styled, { useTheme } from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.snow};
  box-shadow: ${props => props.theme.shadows.hard};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 90px;
    padding: 0 1.75rem;

    ul {
      list-style: none;
      display: flex;

      li {
        display: flex;
        align-items: center;

        .icon {
          background-color: ${props => props.theme.colors.gray[250]};
          height: 30px;
          width: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: 0.5rem;
        }

        .content {
          display: flex;
          flex-direction: column;
          &__title {
            font-size: 0.5rem;
            text-transform: uppercase;
          }
          &__description {
            font-weight: 900;
          }
        }
      }
    }
  }
`