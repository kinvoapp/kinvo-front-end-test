import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    background: #FFFFFF;
    font-size: 13px;
    font-weight: 600;
    text-align: left;
    border: none;
    border-bottom: 1px solid #CCCFD1;
    color: #707B81;
    cursor: pointer;
`;

export const ContainerIcon = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    background: ${props => props.isActive ? "#4C309B" : "#CCCFD1"};
    margin-right: 14px;
`;

export const ContainerTitle = styled.div`
    display:flex;
    width: 40%;
`;

export const ContainerStyle = styled.div`
    display: flex;
`;

export const Icon = styled.img``;