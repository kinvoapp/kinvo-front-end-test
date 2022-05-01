import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    margin-bottom: 0.375rem;
    margin-left: 1.25rem;
    
`
export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1.25rem;
    padding-left: 2rem;
    &::after {
        content: '';
        width: 120%;
        height: 1.5px;
        background-color: #EEF2F4;
        position: absolute;
        top: 44rem;
        right: 0rem;
        transition: 0.2s;
    }
`

export const MenuSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2.125rem;
    margin-bottom: 2rem;

`

export const HeaderTitle = styled.h3`
    margin-bottom: 2rem;
    font-weight: normal;
    font-size: 1.125rem;
`
export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 17rem;
    padding: 0.5rem;
    border-radius:10px;
    input {
        padding: 0.4rem;
        border-radius:10px;
        background-color: white;
        border: 1px solid var(--gray-400);
        width: 100%;
        padding-left: 1.5rem;
        font-family: 'Montserrat', sans-serif;
        color: #707B81;
        
    }
    `

export const OrderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    width: 10rem;
    padding-left: 0.625rem;
    border-radius: 10px;
    background-color: white;
    border: 1px solid var(--gray-400);

`

export const MainSection = styled.div`

`
