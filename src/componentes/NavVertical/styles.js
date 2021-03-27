import styled, { css } from 'styled-components';

const Menu = styled.ul`
    background-color: #fff;
    max-width: 320px;
    ${({ noListStyle }) => 
        noListStyle ? 
            css ` list-style: none; ` : 
                css `
                    list-style-type: disc;
                    color: #4C309B;
                `
            }
    height: 100%;
`

Menu.Li = styled.li`
    padding-top: 20px;
    padding-bottom: 20px;

    position: relative;
`

Menu.Li.Expand = styled.span`
    position: absolute;
    right: 25px;
    font-size: 15pt;
`

Menu.WrapperIconTitle = styled.div`
    display: flex;
    align-items: center;
`; 

export {
    Menu
}