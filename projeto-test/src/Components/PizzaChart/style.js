import styled from "styled-components";

export const PChart= styled.div`
    height: 428px;
    width: calc(50% - 5px);
    border-radius: 10px;
    background-color: #fff;
    font-size: 18px;
    .titlePizzaChart{
        height: 60px;
        border-bottom: 1px solid rgba(211,211,211,0.4);
        display: flex;
        align-items:center;
        padding-left: 15px;
        color:#627179;
    }
    .pizzachart{
        height: calc(100% - 140px);
    }
    .pizzachartfooter{
        height: 80px;
        border-top: 1px solid rgba(211,211,211,0.4);
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-items:center;
        padding: 20px;
        margin:0px;
        list-style:none;
        li{
            width: 33%;
            font-size:10px;
            display:flex;
            justify-content:flex-start;
            align-items:center;
        }
        div{
            width: 10px;
            height:10px;
            border-radius:50%;
            background-color: #d2d7d9;
            margin-right: 20px;
        }

    }
`
