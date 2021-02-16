import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .graph_container {
        display: flex;
        flex-direction: column;
        background: var(--color-light);
        margin-bottom: 28px;
        min-width: 300px;
        border-radius: var(--border-radius-medium);
        box-shadow: var(--box-shadow-medium);
        flex: 1;

        h2 {
            font-weight: 500;
            font-family: var(--font-family-primary);
            font-size: 18px;
        }

        @media screen and (min-width: 700px){
            &:first-child {
                margin-right: 20px;
            }
        }
  
    }

    .graph_title {
        padding:  20px;
        border-bottom: 1.5px solid var(--color-secondary);
    }

    .graph_data {
        display: flex;
        justify-content: center;
        width: 100%;
        border-bottom: 1.5px solid var(--color-secondary);
    }

    .graph_legend {
        padding:  20px;
        display: flex;
        justify-content: space-around;
        span {
            font-size: 14px;
            color: var(--color-primary);
        }
    }



`