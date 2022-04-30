import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    gap: 0.875rem;
    padding: 1rem;
    p {
        max-width: 4.625rem;
        font-size: 0.8125rem;    
    }
    &.active{
        background-color: #F8FAFB;
    }
`




export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex;
    border-radius: 100%;
    width: 2.125rem;
    height: 2.125rem;
    background-color: #DAE0E3;
`



export const Divider = styled.div`
    margin-left: 1px;
    margin-right: 1px;
    height: 1px;
    background-color: #CCCFD1;
`

export const OptionContainer = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    li {
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: normal;
    }
    li::before {
        content: "• ";
        color: #4C309B;
        font-weight: bold;
        display: inline-block; 
        font-size: 1.5rem;
        margin-left: -1em;
    }

`
