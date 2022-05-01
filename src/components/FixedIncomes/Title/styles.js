import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 1.25rem;
    padding-top: 1.25rem;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    &.odd{ 
        background-color: var(--background)
    }

`

export const NameSection = styled.div`
    border-radius: 10px;
    border: 1px solid var(--gray-200);
    width: 24em;
    padding: 0.625rem;
    height: 5rem;

`
export const UpperSection = styled.div`
    display: flex;
    gap: 0.625rem;
    margin-bottom: 1rem;
    align-items: center;
    p {
        font-size: 0.625rem;
        color: var(--gray-600);
    }
`

export const LowerSection = styled.div`
    display: flex;
    div {
        p:first-child {
            font-size: 0.625rem;
        }
    }
    
`

export const Name = styled.p`
    max-width: 13rem;
    font-size: 0.85rem;
    color: var(--gray-600);
    margin-right: auto;
    margin-top: auto;
    margin-bottom: 0.2rem;

`
export const BondType = styled.p`
    color: var(--purple-400);
    font-size: 0.9rem;  

`

export const Result = styled.div`
    border-radius: 10px;
    border: 1px solid var(--gray-200);
    padding: 0.625rem;
    width: 30.25rem;
    height: 5rem;


`
export const ResultComponent = styled.div`
    &:not(:last-child) {
        margin-right: 1.25rem;
    }
    
    p:last-child {
        color: var(--cyan)
    }
`

export const DueDate = styled.div`
    border-radius: 10px;
    border: 1px solid var(--gray-200);
    padding: 0.625rem;
    width: 13.5rem;


`

export const DueDateComponent = styled.div`
    &:not(:last-child) {
        margin-right: 1.25rem;
    }
    p:last-child {
        color: var(--blue)
    }
`
