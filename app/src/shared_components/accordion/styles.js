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
        padding: 0 15px;
        min-width: calc(227px - 30px);
        background: var(--color-light);
     
        display: flex;
        align-items: center;
        justify-content: space-between;
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

        .arrow_left {
            transform: rotate(90deg);
            transition: 0.3s;
        }
    }

    .accordion_inner_option {
        padding: 16px;
        background: var(--color-light);
        border-bottom: 1.5px solid var(--color-secondary);
        color: var(--color-accent);
        display: flex;
        align-items: center;
        justify-content: space-between;

        .arrow_left {
            color: var(--color-primary);
        }

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