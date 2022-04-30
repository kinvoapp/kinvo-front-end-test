import styled from 'styled-components'

export const Classification = styled.div`
    display: flex;

    img{
        padding: 0 0 10px 5px;
    }
`;

export const DataExpiration = styled.div`
    font-size: 0.6rem;
    border: 1px solid var(--cor001);

    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    min-width: 250px;
`;

export const DataExpirationInfo1 = styled.div`
    color: var(--cor007);
    font-size: 0.9rem;
    font-weight: bold;
`;

export const DataPositionInformations = styled.div`
    display: flex;
    flex-direction: row;

    align-items: flex-end;
    gap: 25px;
`;

export const DataTitleInfo1 = styled.div`
`;
