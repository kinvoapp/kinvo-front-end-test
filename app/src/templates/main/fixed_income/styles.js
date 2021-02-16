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


    .content_container {
        padding: 28px 20px 28px 28px;
        max-width: calc(100% - 48px);
        font-family: var(--font-family-primary);
        background: var(--color-secondary);
        flex: 1;
        h1 {
            font-size: 20px;
            color: var(--color-accent);
            margin-bottom: 28px;
        }
    }

    ${smallCard}
`

