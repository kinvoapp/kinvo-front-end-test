import styled, { css } from 'styled-components';

const MyButtonIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    ${({ colorBackground }) => css`
        background-color: ${colorBackground};
    `}
`

const HorizontalLine = styled.hr`
    color: #CCCFD1;
    font-size: 0.5px;
`

export {
    MyButtonIcon, HorizontalLine
}