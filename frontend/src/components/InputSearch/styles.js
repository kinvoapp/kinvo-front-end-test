import styled from "styled-components"

export const Input = styled.input`
    border: unset;
    text-indent: 10px;
    color: var(--cor010);
    width: 100%;

    &:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`;

export const Img = styled.img`
    padding: 10px 0px 10px 10px;
`;