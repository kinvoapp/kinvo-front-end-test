import styled from 'styled-components';

const WrapperApp = styled.div`
    display: grid;
    grid-template-areas: 
        "header header header"
        "aside main main";
    grid-gap: 1rem;
    grid-template-columns: auto 100%;
    grid-template-rows: auto 100vh auto;
`
const WrapperMenu = styled.div`
    grid-area: aside;
    position: relative;
    top: 79px;
    max-width: 380px;
    min-width: 340px;
`;

const ContentApp = styled.div`
    grid-area: main;
    position: relative;
    top: 79px;
`;

export { WrapperApp, ContentApp, WrapperMenu }