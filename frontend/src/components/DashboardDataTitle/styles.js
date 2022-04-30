import styled from 'styled-components'

export const Classe1 = styled.div`
    color: var(--cor005);
    font-size: 1rem;
    font-weight: bold;
`;

export const Classification = styled.div`
    display: flex;

    img{
        padding: 0 0 10px 5px;
    }
`;

export const DataTitle = styled.div`
    font-size: 0.6rem;
    border: 1px solid var(--cor001);

    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    min-width: 375px;
`;

export const DataTitleInfo = styled.div`
    p{
        font-size: 0.8rem;
    }
`;

export const DataTitleInfo1 = styled.div`
`;

export const DataInformations = styled.div`
    display: flex;

    padding: 20px;
    gap: 10px;
`;

export const DataTitleInformations = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: flex-end;
`;
