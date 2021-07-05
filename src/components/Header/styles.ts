import  styled  from 'styled-components' 

export const Container = styled.div`       
    max-width: 1366px;
    margin: 0 auto;
    background: #FFFFFF;
       
`;

export const Content = styled.header`
    box-shadow: 0px 3px 20px #707B811A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: solid green; */
    padding: 1.5rem;

    img {
        padding-left: 32px;
    }

    .infoHeader {
        display: flex;
        align-items: center;       
        /* border: solid red; */

        .itemHeader {
            /* border: solid yellow; */
            display: flex;
            align-items: flex-end;
            justify-content: left;
            height: 30px;
            padding: 1rem  0.3rem;

            img {
                padding: 0 0.5rem;
            }
            
            span {
                display: flex;
                flex-direction: column;
                justify-content: left;

                header {
                    font-family: 'Montserrat' , sans-serif;
                    font-size: 8px;
                    font-weight: normal;
                    letter-spacing: 0.4px;
                    text-align: left;
                    color: var(--textMenu);
                }

                strong {
                    font-family: 'Montserrat' , sans-serif;
                    font-size: 16px;
                    font-weight: bold;
                    letter-spacing: 0;
                    text-align: left;
                    color: var(--textMenu);
                }
            }             
        }

        .itemMenu {
            /* border: solid blueviolet; */
            display: flex;
            align-items: flex-end;
            justify-content: left;
            padding: 1rem  0.3rem;

            
            img {
                padding: 0 0.5rem;
                margin-left: 1rem;
            }
            
            span {
                display: flex;
                flex-direction: column;
                justify-content: left;

                    header {
                        font-family: 'Montserrat' , sans-serif;
                        font-size: 8px;
                        font-weight: normal;
                        letter-spacing: 0.4px;
                        text-align: left;
                        color: var(--textMenu);
                    }

                    strong {
                        font-family: 'Montserrat' , sans-serif;
                        font-size: 16px;
                        font-weight: bold;
                        letter-spacing: 0;
                        text-align: left;
                        color: var(--textMenu);
                    }
            }             
            
        }   
    }
`;

