import styled from "styled-components";

export const ListMyFixedAnuities = styled.div`
    margin: 0px;
    height: auto;
    width: 100%;
    padding: 10px 21px 10px 21px;
    #HeaderFixedAuities{
        height: 60px;
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(211,211,211,0.4);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 5px 20px;
        color: #627179;
        h2{
            text-transform: capitalize;
            width: auto;
        }
        #inputs{
            flex:1;
            display:flex;
            justify-content:flex-end;
            align-items:center;
            select{
                height: 32px;
                width: 150px;
                margin-right:20px;
                border:1px solid #d2d7d9;
                border-radius:10px;
                background-color: #fff;
                padding: 5px 5px 5px 10px;
                color: #627179;
            }
            .searchFix{
                height: 32px;
                width: 250px;
                display:flex;
                align-items:center;
                border:1px solid #d2d7d9;
                border-radius:10px;
                padding: 5px;
                img{
                    height: 20px;
                    width: 20px;
                    margin-right:10px;
                }
                input{
                    flex: 1;
                    height: 100%;
                    padding-left: 10px;
                    border:none;
                }
            }
        }
    }
    #FooterFixedanuities{
        height: 80px;
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        border-top: 1px solid rgba(211,211,211,0.4);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        align-items:center;
        justify-content:center;
        .bottomListFixed{
            height: 35px;
            width:35px;
            border-radius:5px;
            border: 1px solid #d2d7d9;
            color:#d2d7d9;
            margin:0px 5px;
            display: flex;
            justify-content:center;
            align-items:center;
            cursor:pointer;
        }
        .nowPage{
            background-color: #d2d7d9;
            color:#fff;
        }
    }
    .listFixedAnuities{
        width: 100%;
        height: auto;
        padding: 0px;
        margin: 0px;
        list-style: none;
    }
`