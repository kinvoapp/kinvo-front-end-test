import React from 'react';
import styled from 'styled-components';
import '../../App.css';
const {default: TopMenu} = require('../TopMenu');
const {default: LeftMenu} = require("../LeftMenu");

const Main = styled.main`

    display: flex;
    flex-direction: column;
    background: #EEF2F4 0% 0% no-repeat padding-box;
    height: 100%;
    box-sizing:border-box;
`;

function PageDefault({children}){

    return(
        <>
            <TopMenu/>
            <LeftMenu/>
            <Main>
                {children}
            </Main>
        </>
    );
}

export default PageDefault;