import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 118px;
    padding: 5px;
    gap: 10px;
    `

export const Box = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px #ccc;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    min-width: ${props => `${props.minWidth}px`};
    max-width: ${props => `${props.maxWidth}px`};
    height: 100%;
`

export const Title = styled.div`

    display: flex;
    justify-content: flex-start;
    color: var(--text-color-title-main);

    gap: 10.8px;

    span{

        font-size: 9px;
    }

    img{

        width: 13px;
        height: 13px;
    }
`

export const BoxValues = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .tituloDiv1{

        width: 150px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 500;
        color: var(--text-color-title-main);
    }

    .tituloDiv2{

        .tesDir{

            color: var(--text-color-tesdir-main);
        }
        display: flex;
        flex-direction: column;
    }
`