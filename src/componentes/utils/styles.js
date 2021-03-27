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

export {
    MyButtonIcon
}