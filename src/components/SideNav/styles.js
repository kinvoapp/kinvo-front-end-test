import styled from 'styled-components';

export const Container = styled.div`
    min-width: 160px;
    min-height: 100vh;
    margin: 0;
    top: 0;
    left: 0;
    background-color: #ffffff;
    overflow-x: hidden;
`;

export const Option = styled.a`
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    padding-top: ${props => props.paddingTop};
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background: transparent;
    align-items: center;
    justify-content: space-between;
    text-align: start;
`;

export const CardColumn = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    justify-content: space-between;
`;

export const Texto = styled.span`
    font-size: ${props => props.size};
    color: #707b81;
    margin-top: 1px;
    margin-bottom: 1px;
`;

export const Divider = styled.hr`
    width: 100%;
    border: 1px solid #dae0e3;
`;