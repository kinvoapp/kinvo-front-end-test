import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 0.3px solid #CCCFD1;
    padding-bottom: 10px;
    margin-bottom: 20px;
    height: 33px;

    #sub-item-titulo {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 240px;
    }

    .sub-container {
        display: flex;
        flex-direction: row;
    }

    .sub-item {
        padding: 4px 20px 0 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Mark = styled.div`
    width: 5px;
    height: 32px;
    background-color: #4C309B;
    border-radius: 15px;
`;

export const ItemNomeProduto = styled.p`
    font-size: 12px;
    color: #4C309B;
    padding-left: 10px;
`;

export const ItemTitulo = styled.p`
    font-size: 8px;
    color: #4C309B;
    margin-bottom: 0;
`;

export const ItemValor = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #4C309B;
    margin-top: 0;
`;
