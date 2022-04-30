import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Informations = styled.div`
    display: grid;
    grid-template-columns: 225px 1fr;
    gap: 20px;

    height: 100vh;
`;

export const InfoLeft = styled.div`
    display: flex;
    height: inherit;
    background: var(--cor004);

    /* max-width: 225px; */
`;

export const InfoRight = styled.div`
    display: flex;

    flex-direction: column;
    margin: 40px 20px 40px 0;
`;