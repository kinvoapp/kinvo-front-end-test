import styled from "styled-components";

export const CardSideMenu = styled.li`
    display:flex;
    height: 67px;
    width: 227px;
    /* div:child{
        height: 100%;
    } */
    .icon{
        height: 100%;
        width: 62px;
        background-color: red;
    }
    .text{
        height: 100%;
        width: calc(100% - 92px);
        background-color: orange;
    }
    .iconArrow{
        height: 100%;
        width: 30px;
        background-color: green;
    }
`;