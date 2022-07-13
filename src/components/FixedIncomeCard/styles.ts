import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.gray[250]};
  padding: 0.5rem;
  
  width: 100%;
  max-width: 350px;
  
  .content-card{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &.due {
      max-width: 400px;
      width: 100%;
      .title {
        display: flex;
        flex-direction: column;
      }
      .title__due, .info__title {
        font-size: 0.563rem;
        font-weight: 500;
        text-transform: uppercase;
      }

      .title__content, .info__content {
        font-size: 1rem;
        color:  ${props => props.theme.colors.blue};
      }
    }

    .title {
      font-size: 0.75rem;
      max-width: 154px;
      font-weight: 500;
    }

    .info {
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 0.563rem;
        text-transform: uppercase;
      }

      &__content {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
      }
    }
  }
`

export const DueContainer = styled.div`
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.gray[250]};
  padding: 0.5rem;
  min-width: 200px;
  max-width: 200px;
  width: 100%;

  .content-card{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &.due {
      
      .title {
        display: flex;
        flex-direction: column;
      }
      .title__due, .info__title {
        font-size: 0.563rem;
        font-weight: 500;
        text-transform: uppercase;
      }

      .title__content, .info__content {
        font-size: 1rem;
        color:  ${props => props.theme.colors.blue};
      }
    }

    .title {
      font-size: 0.75rem;
      max-width: 154px;
      font-weight: 500;
    }

    .info {
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 0.563rem;
        text-transform: uppercase;
      }

      &__content {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
      }
    }
  }
`
export const PositionContainer = styled.div`
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.gray[250]};
  padding: 0.5rem;
  flex: 1;
  width: 100%;

  .content-card{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &.result {
      .title {
        display: flex;
        flex-direction: column;
      }
      .title__result, .info{
        font-size: 0.563rem;
        font-weight: 500;
        text-transform: uppercase;
      }

      .title__content, .info__content {
        font-size: 1rem;
        color:  ${props => props.theme.colors.green};
      }
    }

    .title {
      font-size: 0.75rem;
      max-width: 154px;
      font-weight: 500;
    }

    .info {
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 0.563rem;
        text-transform: uppercase;
      }

      &__content {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
      }
    }
  }
`