import styled from "styled-components";

export const HeadDataArea = styled.div`
    height: 150px;
    width: 100%;
    display:flex;
    padding: 15px 21px 0px 21px;
    flex-direction: column;
    h2{
        height: 30px;
        line-height:150%;
        color:#540fc4;
        margin: 20px 0px;
    }
    ul {
        display: flex;
        justify-content: space-between;
        width: calc(100%);
        height: 67px;
        padding: 0px;
        margin:0px;
        list-style: none;
        li{
            height: 100%;
            width: 165px;
            background-color: #fff;      
            border-radius: 10px;  
            display: flex;
            align-items:center;
            padding-left: 10px;
            cursor:pointer;
            div{
                height: 29px;
                border-left: 2px solid rgba(211,211,211,0.4);
                padding-left: 10px;
                h4{
                    height: 9px;
                    font-size: 9px;
                    margin: 0px;
                    margin-bottom:4px;
                    text-transform: uppercase;
                    color:#88898c
                }
                h3{
                    height: 16px;
                    font-size:16px;
                    margin: 0px;
                    color: #540fc4;
                }

            }  
        }
    }
`;
