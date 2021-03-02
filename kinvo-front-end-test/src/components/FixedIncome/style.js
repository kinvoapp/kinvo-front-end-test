import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    width: 100%;
`;

export const Separator = styled.div`
`;

export const ContainerInformation = styled.div`
    display: flex;
    width: 100%;
    justify-content:space-between;
`;

export const ContainerGraphic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    margin-top: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const ContainerFixedIncome = styled.div`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
`;

export const ContainerFixedIncomeTitle = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

export const ContainerFixedIncomeBody = styled.div`
`;

export const FixedIncomeTitle = styled.label`
    color: #627179;
    font-size: 18px;
`;

export const Title = styled.label`
    color: #4C309B;
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0 30px 0;    
`;

export const Image = styled.img``;

export const Order = styled.select`
    width: 155px;
    height: 32px;
    border-radius: 10px;
    border: 1px solid #D6D9DD;
    font-size: 12px;
    color: #707B81;
    padding-left: 8px; 
`;

export const Search = styled.input`
    width:240px;
    height: 32px;
    border: 1px solid #D6D9DD;
    border-radius: 10px;
    margin-left: 17px;
    padding-left: 30px;
    color:#707B81;
    font-size: 12px;
`;

export const ContainerItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
