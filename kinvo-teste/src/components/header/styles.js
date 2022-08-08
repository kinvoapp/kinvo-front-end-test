import styled from 'styled-components';

export const Container = styled.header`
    margin-top: 0px;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 90px;
    background: #fff;
    padding: 30px;

    div.div-header{
        display: flex;
        justify-content: space-between;
    }

    div.header-items{
        display: flex; 
    }

    div.header-item{
        display: flex;
        margin-left: 25px;
        color: #707B81;
    
        div {
            margin-left: 14px;
    
            h6 {
                font-weight: bold;
            }
            p {   
                font-size: 16px;
                font-weight: bolder;
            }
        }
    }

    div.minha-carteira{
        display: flex; 
        margin-left: 25px;
        margin-right: 20px;
    }SW
`;