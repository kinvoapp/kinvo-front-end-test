import styled from 'styled-components'

export const Container = styled.div`
    font-family: var(--font-family-primary);



    .lateral_nav {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        min-height: 100vh;
        transition: 0.3s;
        background: var(--color-light);

        @media screen and (min-width: 651px) {
            width: 0px;
        }
        @media screen and (max-width: 650px){
            position: fixed;
            left: -277px;
            top: 90px;
            z-index: 2021;
        }


    }

    .lateral_nav.active {
        opacity: 1;
        transition: 0.3s;
        
        @media screen and (min-width: 651px) {
            width: 227px;
        }

        @media screen and (max-width: 650px){
            position: fixed;
            left: 0px;
            top: 90px;
            z-index: 2021;
        }
    }



`