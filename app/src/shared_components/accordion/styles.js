import styled from 'styled-components'

export const Container = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: var(--color-primary);

    .accordion {
        max-height: 67px;
        width: 227px;
        background: var(--color-light);
        overflow: hidden;
        transition: 0.3s;
        cursor: pointer;

    }

    .accordion_title {
        min-height: 65.5px;
        min-width: 227px;
        background: var(--color-light);
        padding: 0 15px;
        display: flex;
        align-items: center;
        border-bottom: 1.5px solid var(--color-secondary);

        &:hover {
            filter: brightness(95%);
        }
    }

    .accordion_active {
        max-height: 5000px;
        width: 227px;
        background: var(--color-light);
        overflow: hidden;
        transition: 2s;
        cursor: pointer;
    }

    .accordion_title.active {
        background: var(--color-secondary-shaded);
    }

    .accordion_inner_option {
        padding: 16px;
        background: var(--color-light);
        border-bottom: 1.5px solid var(--color-secondary);
        color: var(--color-accent);

        &:hover {
            filter: brightness(95%);
        }

        span {
            color: var(--color-primary);
        }
    }

    .accordion_inner_option.active {
        background: var(--color-secondary-shaded);
    }
`