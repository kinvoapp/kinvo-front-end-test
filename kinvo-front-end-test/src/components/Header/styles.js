import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #FFF;
    padding: 20px;
`;
export const ContainerLogo = styled.div``;

export const ContainerMenu = styled.div`
    display:flex;
    justify-content:flex-end;
`;

export const ButtonMenu = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    background: #4C309B;
    margin: 0 10px 0 40px;
    cursor: pointer;
    :hover{
        background: rgba(76, 48, 155, 0.9);
    }
    :last-child{
        margin-right: 40px;
    }
`;

export const ButtonMenuFixed = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    background: #CCCFD1;
    margin: 0 10px 0 40px;
`;

export const Image = styled.img``;