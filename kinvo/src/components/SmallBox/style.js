import styled from "styled-components";

export const SmallBoxContainer = styled.div`
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    min-height: 60px;
    flex: 1;
    margin: 10px;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    div {
        border-left: 1px solid #DAE0E3;
        padding: 0 10px;
        height: 100%;

        h3 {
            font-size: 9px;
            color: #4E5B61;
            font-weight: 500;
            text-transform: uppercase;
            margin-bottom: 3px;
        }

        p {
            color: #4C309B;
            font-size: 14px;
            font-weight: 700;
        }
    }
`;