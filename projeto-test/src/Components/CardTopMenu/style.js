import styled from "styled-components";

export const CardTopMenuStyle = styled.div `
    padding: 10px;
    display: flex;
    .IconCard{
        height: 40px;
        width: 40px;
        background-color: #000 ;
    }
    .dataCard{
        height: 40px;
        width: 40px;
        .titulo {
            height: 15px;
            min-width:10px;
            background-color: #abc;
        }
        .valueCard {
            height: 25px;
            min-width:10px;
            background-color: #cba;
        }
    }
`