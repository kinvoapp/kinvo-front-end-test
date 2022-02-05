import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
`;

export const ProductInformationWrapper = styled.div`
    border: 1px solid #DAE0E3;
    padding: 10px;
    border-radius: 10px;
    width:${ props => props.width};
    margin-right: 10px;
    min-height: 77px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:last-child {
        margin-right: 0px;
    }

    .info {
        flex: 1;
    }

    h4 {
        text-transform: uppercase;
        color: #4E5B61;
        font-size: 9px;
        font-weight: 500;
    }

    .title-wrapper {
        align-items: center;
        cursor: pointer;

        img {
            margin-left: 5px;
        }
    }
`;

export const ProductInformation = styled.div`
    display: flex;
    justify-content: space-between;

    .productName {
        font-size: 12px;
        color: #4E5B61;
        font-weight: 500;
        max-width: 194px;
    }

    .productType {
        color: #8A51BA;
        font-size: 14px;
        font-weight: 500;
    }

    div h6 {
        color: #4E5B61;
        font-size: 9px;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    div p {
        color: ${props => props.fontColor};
        font-size: 16px;
        font-weight: 500;
    }
`;