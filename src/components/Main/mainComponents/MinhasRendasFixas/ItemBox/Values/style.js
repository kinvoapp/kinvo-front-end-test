import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
`

export const Title = styled.span`

    font-size: 9px;
    font-weight: 500;
    color: var(--text-color-tesdir-main);
`

export const Amount = styled.span`

    font-weight: 500;
    color: ${props => props.color};
`