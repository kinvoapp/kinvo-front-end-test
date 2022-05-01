import styled from "styled-components"

export const Container = styled.div`
    margin: 20px 0;
    
    display: flex;
    flex-direction: column;

    height: 400px;
    border-radius: 10px;
    background: var(--cor003);

    tspan {
        font-size: 11px;
        font-weight: 600;
        color: #707b81;

        padding: 30px;
    }
`;

export const Title = styled.div`
    margin: 0 0 10px 0;
    display: flex;
    padding: 10px 20px;
`;