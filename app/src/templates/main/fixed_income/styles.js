import styled from 'styled-components'

const smallCard = `
    .small_card_container {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 8px;

        .small_card {
            width: 170px;
            max-width: 170px;
            height: 60px;
            margin: 0 20px 8px 0;
            flex: 1;
            padding: 0 8px;
            border-radius: var(--border-radius-medium);
            
            display: flex;
            flex-direction: column;
            justify-content: center;
        
            background: var(--color-light);
            box-shadow: var(--box-shadow-medium);

            div {
                border-left: 2px solid var(--color-secondary);
                padding-left: 8px;
            }

            p {
                font-size: 9px;
                margin-bottom: 4px;
                text-transform: uppercase;
            }

            h5 {
                color: var(--color-accent);
                font-size: 14px;
            }

            &:last-child {
                margin-right: 0px;
            }
        }
    }

`

export const Container = styled.div`
    display: flex;
    padding-top: 90px;
    background: var(--color-secondary);

    .content_container {
        padding: 28px 20px 28px 28px;
        font-family: var(--font-family-primary);
        h1 {
            font-size: 20px;
            color: var(--color-accent);
            margin-bottom: 28px;
        }
    }

    ${smallCard}
`

export const IncomeTableContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: calc(100% - 40px);
        background: var(--color-light);
        padding:  20px 0px;
        border-radius: var(--border-radius-medium);
        box-shadow: var(--box-shadow-medium);

        .income_table_title {
            display: flex;
            align-items: center;
            margin: 0 20px;
            justify-content: space-between;
        }

        h2 {
            font-weight: 500;
            font-family: var(--font-family-primary);
            font-size: 16px;
        }

        .income_row {
            display: flex;
            min-height: 120px;
            justify-content: space-between;

            &:nth-child(even) {
                background: var(--color-light);
            }

            &:nth-child(odd) {
                background: var(--color-secondary);
            }
        }

        .income_row_content_container {
            min-height: 77px;
            border: 1px solid var(--color-secondary);
            border-radius: var(--border-radius-large);
            margin: 14px;

            &:first-child {
                flex: 2.5;
            }

            &:nth-child(2) {
                flex: 3.5;
            }

            &:nth-child(3) {
                flex:2;
            }

        }

`
