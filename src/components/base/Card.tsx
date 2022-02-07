import styled from "styled-components";
import { getTheme } from "../../styles/theme";

const Card = styled.div.attrs(props => ({
    noPadding: (props as any).noPadding ? true : false
}))`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: ${props => props.noPadding ? 0 : "1rem"};
    border-radius: 0.625rem;
    background-color: ${props => getTheme(props).background.lightest};
    box-shadow: 0px 2px 20px #0000000D;
`;

export {
    Card
};