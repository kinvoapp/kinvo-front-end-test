import styled from "styled-components"

export const Container = styled.div`
    margin: 20px 0;
    
    display: flex;
    flex-direction: column;

    /* height: 400px; */
    border-radius: 10px;
    background: var(--cor003);
`;

export const Title = styled.div`
    margin: 0 0 10px 0;
    display: flex;
    padding: 10px 20px;
    border-bottom: 1px solid var(--cor001);
`;

export const ChartLegendContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    margin: 25px 0 0 0;
    border-top: 1px solid var(--cor001);
    padding: 10px 20px 20px 20px;
`;

export const ChartLegend = styled.li`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px 0 0 12px;
    color: var(--cor010);
    font-size: 0.8rem;

    &:before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background: var(--cor001);
        left: 2%;
        border-radius: 100%;
    }
`;