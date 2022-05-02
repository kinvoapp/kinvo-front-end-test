import styled from "styled-components";

export const FixedAnnuitiesItem = styled.li`
    max-width: 1090px;
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    cursor:pointer;
    .data {
        display: flex;
        justify-content: space-between;
    }
    .subData{
        display:flex;
        flex-direction: column;
        min-width:40px;
        padding-right: 10px;
        height: 30px;
        .name{
            padding-right: 30%;
            margin:0px;
            font-size:9px;
            line-height: 15px;
            text-transform: capitalize;
        }
        .subTitle{
        margin: 0px;
        font-size: 9px;
        text-transform: uppercase;
        }
        .typeclass{
            color: #540fc4;
            height: 16px;
            margin: 0px;
            font-size: 12px;
            text-transform: capitalize;
            line-height: 180%;
        }
        .value{
            font-size: 14px;
            height: 16px;
            margin: 0px;
        }
    }    
    .titleAnnuities, .myPosition, .dueDate {
        height: 77px;
        border: 1px solid #d2d7d9;
        border-radius:10px;
        padding: 9px;
    }
    .titleAnnuities{
        width: 35%;
    }
    .myPosition{
        width: 45%;
    }
    .dueDate{
        width: 18%;
    }
    .headTitle, .headMyPosition, .headDueDate{
        display: flex;
        align-items: center;
        margin-bottom:10px;
        span{
            margin-right: 10px;
            font-size:11px
        }
    }
`;
