import styled from "styled-components";

export const Container = styled.div`
margin-top: 0;
width: 1040px;

`;


export const Ativos = styled.div`
    width: 1090px;
    margin-left: 10px;
    margin-top: 8px;
    border-radius: 10px;
    padding-bottom: 16px;
    box-shadow: 0px 2px 6px #0000000A;
    background: #FFFFFF;   

    .title {
        margin-top: 15px;

         h1{
            font-family: 'Montserrat', sans-serif;
            font-size: 18px;
            color: var(--title);
            text-align: left;
            font-weight: normal;
            margin-left: 19px;
            padding-top: 16px;            
        }
    } 

    .cards {
        display: flex;
        align-items: center;
        border-top: 1px solid #EEF2F4;
        margin-top: 10px;
        width: 1090px;
        /* justify-content: space-between; */
         /* height: 97px; */
        

        .cardTitulo{
            display: flex;            
            flex-direction: column;
            margin-top: 41px;
            margin-right: 10px;
            margin-left: 20px;
            width: 372px;
            min-height: 79px;
            
            border: 1px solid #DAE0E3;
            border-radius: 10px;
            
            
            .titulo {
                display: flex;
                align-items: center;   
                margin-top: 9px;            
                
                h5{
                    font-family: 'Montserrat', sans-serif;
                    font-size:11px;
                    font-weight: normal;
                    color: var(--textItemList);
                    text-align: left;
                    margin-left: 10px;
                }

                img{                    
                    margin-left: 10px;
                }
            }

            .footerCard {
                display: flex;
                align-items: center;
                justify-content: space-between; 
                margin-left: 9px;
                margin-right: 10px;
                margin-top: 10px;

                .ativo {
                   max-width: 194px;
                   font-family: 'Montserrat', sans-serif;
                   font-weight: 500;
                   font-size: 12px;
                   color: var(--textItemList);           
                }

                .classe {
                    align-items: flex-start;
                    h6{
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 500;
                        font-size: 9px;
                        margin-left: s3px;
                        color: var(--textItemList);
                        text-transform: uppercase;
                    }

                    h4{
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 500;
                        font-size: 14px;
                        color: var(--textClass);
                        

                    }
                }
            }
        }

        .cardPosicao{
            display: flex;            
            flex-direction: column;
            margin-top: 41px;
            margin-right: 10px;
            width: 459px;
            min-height: 79px;
            border: 1px solid #DAE0E3;
            border-radius: 10px;

            .posicao {
                display: flex;
                align-items: center;       
                
                margin-top: 9px;
                

                h5{
                    font-family: 'Montserrat', sans-serif;
                    font-size:11px;
                    font-weight: normal;
                    text-align: left;
                    color: var(--textItemList);
                    margin-left: 10px;
                }

                img{                    
                    margin-left: 10px;
                }
            }

            table {
                margin-left: 10px;
                margin-top: 16px;
                
                                   
               th {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 9px;
                    font-weight: 500;
                    letter-spacing: 0.45px;
                    text-align: left;
                
                    
                    
                    color: var(--textItemList);                    
                    text-transform: uppercase;        
                }
                td {
                    font-family: 'Montserrat', sans-serif;
                    text-align: left;
                    font-weight: 500;
                    font-size: 16px;
                    color: var(--textMyPosition);

                }
            }
        }

        .cardVencimento {
            display: flex;            
            flex-direction: column;
            margin-top: 41px;
            margin-right: 21.5px;
            width: 198px;
            height: 77px;
            border: 1px solid #DAE0E3;
            border-radius: 10px;
            min-height: 79px;

            .vencimento {
                display: flex;
                align-items: center;       
                margin-top: 9px;
                
                

                h5{
                    font-family: 'Montserrat', sans-serif;
                    font-size:11px;
                    font-weight: normal;
                    text-align: left;
                    color: var(--textItemList);
                    margin-left: 10px;
                    
                }

                img{                    
                    margin-left: 10px;
                }
            }

            table {
                margin-left: 10px;
                margin-top: 16px;
                                   
               th {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 9px;
                    font-weight: 500;
                    letter-spacing: 0.45px;
                    text-align: left;
                
                    
                    
                    color: var(--textItemList);                    
                    text-transform: uppercase;        
                }
                td {
                    font-family: 'Montserrat', sans-serif;
                    text-align: left;
                    font-weight: 500;
                    font-size: 16px;
                    color: var(--dueDate);

                }
            }
        }     
    }
`;

export const Image = styled.div`
    img{
        margin-top: 10px;
    }

`;



