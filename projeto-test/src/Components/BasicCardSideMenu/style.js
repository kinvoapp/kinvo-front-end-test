import styled from "styled-components";

export const CardSideMenu = styled.li`
    display:flex;
    height: 67px;
    width: 227px;
    align-items:center;
    justify-content:center;
    border-bottom: 1px solid rgba(211,211,211,0.4);
    cursor:pointer;
    .icon{
        height: 100%;
        width: 62px;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            height: 30px;
            width: 100%;
        }
    }
    .text{
        height: 100%;
        width: calc(100% - 92px);
        font-size:12px;
        display:flex;
        align-items:center;
        p{
            width: 60%;
            color:#88898c;
            font-weight: bold;
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