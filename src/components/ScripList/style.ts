import styled from 'styled-components'

export const Content = styled.div`
    background: var(--white-800);
    border-radius:12px;

    margin: 25px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;


    border-bottom:1px solid var(--grey-500);
    height: 100px;

    h2{
        margin-right: 250px;
    }

    img{
        padding: 0px 12px;
    }

    input{
        border: 1px solid var(--grey-500);
        border-radius:8px;
        float: right;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        height:32px;
    }
    .textSearch{
        width: 220px;
    }
`
export const List = styled.div`
    margin-top: 8px;

    .item{
        display: flex;
        border-bottom: 1px solid var(--grey-500);
        flex-wrap: wrap;
        gap: 12px;
        max-width: 1120px;;
        padding: 8px;

        .firstBox{
            
            border: 1px solid var(--grey-500);
            border-radius: 12px;
            flex:1;
            font-size: 13px;
            font-weight:500;
            padding: 8px;

            img{
                margin-left: 12px;
            }

            .bottom{
                display: flex;

                
                .firstItem{
                    margin-top: 46px;
                    margin-right:12px;
                }

                .secondItem{
                    display: inline-block;

                    margin-top: 16px; 

                    >p{
                       margin-top: 16px; 
                    }

                    .type{
                        color: var(--purple-800);
                        font-weight: 500;
                    }
                }
            }
        }
        
        .secondBox{
            border: 1px solid var(--grey-500);
            border-radius: 12px;
            flex: 2;
            padding: 8px;

            img{
                margin-left: 12px;
            }

            .divider{
                display: flex;
                justify-content: space-between;
                margin-top: 12px;
            }
            .firstItem{
                font-size: 12px;
                font-weight:500;
                }

            .secondItem{
                    display: inline-block;

                    font-size: 12px;
                    font-weight:500;
                    margin-top: 24px; 

                    >p{
                       margin-top: 16px; 
                    }

                    .type{
                        color: var(--green-500);
                        font-weight: 500;
                    }
                }
        }

        .thirdBox{
            border: 1px solid var(--grey-500);
            border-radius: 12px;
            flex:1;
            padding: 8px;

            img{
                margin-left: 12px;
            }

            .firstItem{
                font-size: 12px;
                font-weight:500;
            }

            .divider{
                display: flex;
                margin-top: 12px;
                justify-content: space-evenly;
            }

            .secondItem{
                    display: inline-block;

                    font-size: 12px;
                    font-weight:500;
                    margin-top: 24px; 

                    >p{
                       margin-top: 16px; 
                    }

                    .type{
                        color: var(--blue-500);
                        font-weight: 500;
                    }
                }

        }
    }
    
`