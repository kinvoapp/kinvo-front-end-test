import styled from "styled-components";


export const Container = styled.section`
    margin-right: 28px;
    margin-left: 248px;
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 24px;   
    
        .title {
            font-family: 'Montserrat', sans-serif;
            font-size: 20px;
            font-weight: bold;
            color: #4C309B;
        }

        .itens {
            margin-top: 24px;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 10px;
            /* overflow-x: scroll;  lembrar estilizar o scroll */


            .item {
                background: #FFFFFF;
                display: flex;
                align-items: center;
                border-radius: 10px;
                top: 165px;
                left: 432px;
                width: 172px;
                height: 60px;
                box-shadow: 0px 2px 20px #0000000D;
                
                div {
                    display: flex;
                    flex-direction: column;
                    margin-left: 8px;
                    border-left: 2px #DAE0E3 solid;
                    padding-left: 4px;

                    p {
                        font-family: 'Montserrat', sans-serif;
                        font-weight: normal;
                        font-size: 9px;
                    }

                    strong {
                    text-align: left;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0px;
                    color: #4C309B;
                    
                    
                }
                }
                

                
                
                
            }               
    }
`;