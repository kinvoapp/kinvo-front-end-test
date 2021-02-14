import styled from 'styled-components'

export const Container = styled.div`
    font-family: var(--font-family-primary);
    padding-top: 90px;


    .lateral_nav {
        display: flex;
        flex-direction: column;
        width: 0px;
        overflow: hidden;
        min-height: 100vh;
        transition: 0.3s;
        opacity: 0.3;
        background: var(--color-light);

    }

    .lateral_nav.active {
        width: 227px;
        opacity: 1;
        transition: 0.3s;
    }



`