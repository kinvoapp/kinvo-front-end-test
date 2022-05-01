import styled from "styled-components";

export const PChart= styled.div`
    height: 428px;
    width: calc(50% - 5px);
    border-radius: 10px;
    background-color: #fff;
    .titlePizzaChart{
        height: 60px;
        border-bottom: 1px solid rgba(211,211,211,0.4);
        display: flex;
        align-items:center;
        padding-left: 15px;
    }
    .pizzachart{
        height: calc(100% - 140px);
    }
    .pizzachartfooter{
        height: 80px;
        border-top: 1px solid rgba(211,211,211,0.4);

    }
`
