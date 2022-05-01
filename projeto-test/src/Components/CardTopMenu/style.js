import styled from "styled-components";

export const CardTopMenuStyle = styled.div`
    padding: 10px;
    display: flex;
    margin-right:30px;
    .IconCard{
        height: 30px;
        width: 30px;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .dataCard{
        height: 30px;
        padding-left:10px;
        .titulo {
            height: 10px;
            min-width:10px;
            text-transform: uppercase;
            font-size:9px;
            font-weight: bold;
            color: #D2D7D9;
        }
        .valueCard {
            height: 20px;
            min-width:10px;
            font-weight: bold;
            color:#88898C;
        }
    }
`