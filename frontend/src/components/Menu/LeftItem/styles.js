import styled from "styled-components"
import arrow from '../../../assets/icones/arrow.svg'


export const Container = styled.li`
    height: 60px;
    border-bottom: 1px solid var(--cor001);

    display: flex;
    align-items: center;
    
    margin: 0 0 0 0;
    padding: 0 0 0 0.6rem;

    cursor: pointer;
    
    background: var(--cor004);

    &:hover{
        background: var(--cor002);

       div:first-of-type{
           background: var(--cor009);
       }
    }
`;

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
        
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: var(--cor001);
`;

export const MenuInformations = styled.div`
    width: 120px;
    font-size: 14px;
    padding-left: 1rem;

    display: flex;
    font-family: Helvetica, Arial, sans-serif;
    flex-direction: column;
    
    color: var(--cor008);
`;

export const SobMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const SobMenuList = styled.ul`
    margin: 0px;
    padding: 0px;
    width: 225px;
`;

export const SobMenuListItem = styled.li`
    height: 40px;
    border-bottom: 1px solid var(--cor001);

    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    
    margin: 0 0 0 0;
    padding: 0 0 0 0.6rem;
    font-size: 0.8rem;

    cursor: pointer;
    background: var(--cor004);

    &:hover{
        background: var(--cor002);
    }

    &::before{
        content: "";
        width: 5px;
        height: 5px;
        background: var(--cor009);
        border-radius: 50%;
        margin: 0 20px 0 10px;
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding: 0 20px 0 0;
`;