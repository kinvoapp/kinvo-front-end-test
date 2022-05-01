import styled from 'styled-components'

export const DataTitle = styled.div`
    font-size: 0.6rem;
    border: 1px solid var(--cor001);
    border-radius: 10px;
    padding: 10px 5px;

    min-width: 375px;
    
    display: flex;
    flex-direction: column;
`;

export const Classification = styled.div`
    display: flex;
    padding: 0 0 10px 0;

    img{
        padding: 0 0 0 5px;
    }
`;

export const DataTitleInformations = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

export const DataTitleInfo = styled.div`
    font-size: 0.8rem;
    width: 220px;
`;

export const DataTitleInfo1 = styled.div`
`;

export const Classe1 = styled.div`
    color: var(--cor005);
    font-size: 1rem;
    font-weight: bold;
`;

export const DataPosition = styled.div`
    font-size: 0.6rem;
    border: 1px solid var(--cor001);
    border-radius: 10px;
    padding: 10px 5px;
    
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const DataPositionInformations = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
`;

export const DataPositionInfo1 = styled.div`
    color: var(--cor006);
    font-size: 0.9rem;
    font-weight: bold;
`;

export const DataExpiration = styled.div`
    font-size: 0.6rem;
    border: 1px solid var(--cor001);
    border-radius: 10px;
    padding: 10px 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const DataExpirationInfo1 = styled.div`
    color: var(--cor007);
    font-size: 0.9rem;
    font-weight: bold;
`;