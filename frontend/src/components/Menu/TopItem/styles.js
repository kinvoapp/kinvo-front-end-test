import styled from 'styled-components'

export const Item = styled.div`
    display: flex;
    align-items: center;
    margin: 0 30px 0 0;
`;

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--cor008);
`;

export const Information1  = styled.p`
    text-transform: uppercase;
    font-size: 0.5rem;

`;
export const Information2  = styled.p`
    font-size: 1rem;
    font-weight: bold;
`;

export const Circle = styled.div`
    border-radius: 50%;
    height: 30px;
    width: 30px;

    background: ${({circleBackground}) => circleBackground === 'var(---cor009)' ? 'var(---cor009)' : 'var(--cor001)'};

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 5px 0 0;
`;