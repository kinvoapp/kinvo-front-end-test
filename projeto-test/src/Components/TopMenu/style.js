import styled from "styled-components";


export const LogNav = styled.header `
    height: 90px;
    width: 100%;
    opacity: 1;
    background: #fff;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px ;
    box-sizing: border-box;
    #logo {
        height: 30px;
        width: 300px;
    }
    #TopMenu {
        list-style:none;
        display: flex;
        align-items:center;
        padding-right: 40px;
        li{
            cursor:pointer;
        }
        #IconMenu{
            height: 30px;
            width: 30px;
            cursor:pointer;
        }
    }
`