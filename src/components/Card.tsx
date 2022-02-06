import styled from "styled-components";
import { getTheme } from "../styles/theme";

const Card = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 0.625rem;
    background-color: ${props => getTheme(props).background.lightest};
    box-shadow: 0px 2px 20px #0000000D;
`;

export {
    Card
};