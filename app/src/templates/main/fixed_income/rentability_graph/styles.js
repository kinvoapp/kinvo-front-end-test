import styled from 'styled-components'

export const RentabilityContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    background: var(--color-light);
    padding:  20px;
    margin-bottom: 28px;
    border-radius: var(--border-radius-medium);
    box-shadow: var(--box-shadow-medium);

    .rentability_title {
        display: flex;
        align-items: center;
        margin: 0 0 40px;
        justify-content: space-between;

        h2 {
            font-weight: 500;
            font-family: var(--font-family-primary);
            font-size: 18px;
        }
    }
`