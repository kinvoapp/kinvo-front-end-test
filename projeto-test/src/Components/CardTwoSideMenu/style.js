import styled from "styled-components";

export const CardTwo = styled.li`
    height: 67px;
    width: 227px;
    display: flex;
    align-items: center;
    justify-content:center;
    border-bottom: 1px solid rgba(211,211,211,0.4);
    cursor:pointer;
    .dot{
        height: 5px;
        width: 5px;
        background-color: #540fc4;
        margin: 25px 15px;
        border-radius:50%;
    }
    .text{
        height: 100%;
        flex:1;
        font-size:12px;
        color:#585859;
        display: flex;
        align-items:center;
        p{
            color:#88898c;
            font-weight: bold;
            text-align:left;
        }
    }
    .iconArrow{
        height: 100%;
        width: 30px;
        display: flex;
        align-items:center;
        justify-content:center;
    }
`;