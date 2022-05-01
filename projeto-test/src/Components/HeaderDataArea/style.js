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
        width: calc(100% - 42px);
        height: 67px;
        padding: 0px;
        margin:0px;
        list-style: none;
        li{
            height: 100%;
            width: 172px;
            background-color: #fff;      
            border-radius: 10px;      
        }
    }
`;
