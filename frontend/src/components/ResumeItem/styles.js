import styled from 'styled-components'

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