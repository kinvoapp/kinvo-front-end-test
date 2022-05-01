import styled from "styled-components";

export const Container = styled.select`
    width: 100%;
    border: unset;
    cursor: pointer;
    color: var(--cor010);

    &:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`;