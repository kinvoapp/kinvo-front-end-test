import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F8FAFB;
    height: 100vh;
    padding: 40px 200px 0 200px;
`;

export const ContainerList = styled.div`
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
`;

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 22px;

    p {
        font-size: 18px;
        color: #707B81;
        font-weight: bold;
        margin: 0;
    }
`;