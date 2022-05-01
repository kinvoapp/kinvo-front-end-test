import styled from "styled-components";

export const CardSideMenu = styled.li`
    display:flex;
    height: 67px;
    width: 227px;
    align-items:center;
    justify-content:center;
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
            color:#585859;
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