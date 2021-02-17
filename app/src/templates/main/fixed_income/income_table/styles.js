import styled from 'styled-components'

export const IncomeTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--color-light);
    padding:  20px 0px;
    border-radius: var(--border-radius-medium);
    box-shadow: var(--box-shadow-medium);
    margin-bottom: 28px;

    h2 {
        font-weight: 500;
        font-family: var(--font-family-primary);
        font-size: 18px;
    }

    .income_table_title {
        display: flex;
        align-items: center;
        margin: 0 20px;
        justify-content: space-between;

        .search_and_sorting {
                display: flex;
                align-items: center;
        }
    }

    .income_row {
        display: flex;
        flex-wrap: wrap;
        min-height: 120px;
        justify-content: space-between;
        align-items: center;

        &:nth-child(even) {
            background: var(--color-light);
        }

        &:nth-child(odd) {
            background: #F8FAFB;
        }
    }

    .income_row_content_container {
        min-height: 57px;
        border: 1px solid var(--color-secondary);
        border-radius: var(--border-radius-large);
        margin: 14px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &:first-child {
            flex: 2.5;
        }

        &:nth-child(2) {
            flex: 3.5;
            span {
                color: var(--color-green);
            }
        }

        &:nth-child(3) {
            flex:2;
            span {
                color: var(--color-blue);
            }
        }
    }

    .income_row_title {
        font-size: 10px;
        display: flex;
        text-transform: uppercase;
        p {
            margin-right: 10px;
        }
    }

    .income_row_content {
        display: flex;
        justify-content: space-between;
        p {
            font-size: 11px;
            max-width: 140px;
        }

        div {
            margin-right: 20px;
            &:last-child {
                margin-right: 0px;
            }
        }
    }

    .income_row_colored {
        p {
            text-transform: uppercase;
            color: var(--color-primary);
            font-size: 9px;
        }
        span {
            text-transform: capitalize;
            font-weight: 500;
            font-size: 12px;
        }
    }
        
`