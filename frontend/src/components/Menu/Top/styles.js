import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 90px;
    width: 100%;

    background: var(--cor003);
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    display: flex;
    margin: 0 0 0 30px;
    align-items: center;
`;

export const MenuItens = styled.div`
    display: flex;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    margin: 0 30px 0 0;

`;

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Information1  = styled.div`
    text-transform: uppercase;
    font-size: 0.5rem;
`;
export const Information2  = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
`;

export const Circle = styled.div`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background: var(--cor001);

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 5px 0 0;
`;
