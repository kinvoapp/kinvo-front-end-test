import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    margin-bottom: 0.375rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    
`
export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 3.5rem;
    border-bottom: 2px solid #EEF2F4;
`

export const MenuSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2.125rem;
    margin-bottom: 0.25rem;

`

export const HeaderTitle = styled.h3`
    font-weight: normal;
    font-size: 1.125rem;
    margin-bottom: 1rem;
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

export const OrderButtonModal = styled.div`
    display: block;
    max-width: 10rem;
    background-color: white;
    position: absolute;
    float: right;
    z-index: 2;
    top: 43rem;
    right: 20.4rem;
    border: 1px solid var(--gray-400);
    border-radius: 10px;
    `

export const ModalOption = styled.button`   
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    padding: 1rem;
    font-size: 0.8rem;
    padding-top:0.3rem;
    padding-bottom:0.3rem;
    font-family: 'Montserrat', sans-serif;
    color: var(--gray-600);
    background-color: white;
    border-bottom: 1px solid var(--gray-400);
    &:last-child {
        border-radius: 10px;
    }
`

export const MainSection = styled.div`

`
