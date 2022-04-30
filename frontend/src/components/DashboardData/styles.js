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

export const ResumeInformations = styled.div`
    padding: 10px 60px 10px 0;
    height: 40px;
    border-radius: 10px;

    display: flex;
    justify-content: flex-start;
    flex: 1;

    background: var(--cor003);
`;

export const VerticalLine = styled.div` 
    height: 100%;
    width: 2px;
    background: var(--cor001);
    margin: 0 10px;

    border-radius: 20px;
`;

export const Resumes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Resume1 = styled.p`
    text-transform: uppercase;
    font-size: 0.5rem;
    color: var(--cor008);
    `;

export const Resume2 = styled.p`
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--cor009);
`;

export const DataContainer = styled.div`
    /* height: 200px; */
    margin: 20px 0 0 0;
    
    display: flex;
    flex-direction: column;
    
    border-radius: 10px;
    background: var(--cor003);
`;

export const DataTopInformations = styled.div`
    padding: 10px 20px;
    border-bottom: 1px solid red;

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
    width: 156px;
`;

export const DataTopSearch = styled.div`
    width: 240px;
    background: yellowgreen;
`;

export const DataInformations = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;

    padding: 20px 0 20px 20px;
`;

export const DataTitle = styled.div`
    font-size: 0.6rem;
    border: 1px solid var(--cor001);

    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
`;

export const Classification = styled.div`
    display: flex;

    img{
        padding: 0 0 10px 5px;
    }
`;

export const DataTitleInformations = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: flex-end;
`;

export const DataTitleInfo = styled.div`
    p{
        font-size: 0.8rem;
    }
`;

export const DataTitleInfo1 = styled.div`
`;

export const Classe1 = styled.div`
    color: var(--color005);
    font-size: 1rem;
`;

export const DataPosition = styled.display`

`;