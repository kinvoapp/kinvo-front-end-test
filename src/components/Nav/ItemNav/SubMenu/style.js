import styled from "styled-components";


export const Item = styled.div`

    position: relative;
    min-height: 47px;
    list-style: none;
    display:flex;
    align-items: center;
    padding: 0 15px;
    gap: 15px;
    cursor: pointer;
    color: var(--text-color-header);
    border-bottom: 1px solid rgba(204, 207, 209, 0.35);

    &:hover{

    background-color: var(--btn-hover);
    }

    &::after{

    content: "";
    position: absolute;
    width: 6px;
    height: 10px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${props => props.arrow})
    }

    div{

        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--text-color-component-main);
    }

`

export const Text = styled.span`


`