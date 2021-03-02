import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    position: sticky;
    top: 0px;
    box-shadow: 0px 0px 3px 2px rgba(41, 41, 41, .25);
    align-items: center;
    background-color: #ffffff;
    padding: 20px;
    justify-content: space-between;
    z-index: 1;
`;

export const Img = styled.img`
    max-width: 200px;
`;

export const Div = styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
`;

export const Titulo = styled.span`
    font: 700 1.6rem Montserrat;
    font-size: ${props => props.size};
    color: #707b81;
    margin-top: 1px;
    margin-bottom: 1px;
`;

export const Texto = styled.span`
    font-size: ${props => props.size};
    color: #707b81;
    margin-top: 1px;
    margin-bottom: 1px;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    padding: 5px;
    margin-left: 20px;
    margin-right: 20px;
    background: transparent;
    align-items: center;
    justify-content: center;
    text-align: start;
`;

export const Icon = styled.div`
    margin-left: 20px;
    margin-right: 20px;
`;