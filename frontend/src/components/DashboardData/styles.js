import styled from 'styled-components'

export const Container = styled.div`

`;

export const Title = styled.h2`
    color: var(--cor009);
`;

export const ResumeContainer = styled.div`
    display: flex;

    flex: 1;
    gap: 10px;
`;

export const DataContainer = styled.div`
    /* height: 200px; */
    margin: 20px 0;
    
    display: flex;
    flex-direction: column;
    
    border-radius: 10px;
    background: var(--cor003);
`;

export const DataTopInformations = styled.div`
    padding: 10px 20px;
    border-bottom: 1px solid var(--cor001);

    display: flex;
    flex: 1;

    justify-content: space-between;
`;

export const DataTopTitle = styled.div`

`;

export const DataTopActions = styled.div`
    display: flex;
    gap: 20px;
`;

export const DataTopOrder = styled.div`
    display: flex;
    width: 156px;
    border: 1px solid var(--cor001);
    border-radius: 10px;
    margin: 0;
    padding: 0 0 0 .5em;
`;

export const DataTopSearch = styled.div`
    display: flex;
    width: 240px;
    border: 1px solid var(--cor001);
    border-radius: 10px;
`;

export const DataInformations = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    padding: 20px;
    gap: 10px;
`;