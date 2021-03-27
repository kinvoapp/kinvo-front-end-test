import styled, { css } from 'styled-components';

const Menu = styled.ul`
    background-color: #fff;
    max-width: 320px;
    ${({ noListStyle }) => noListStyle ? css ` list-style: none; ` : css `list-style-type: disc;`}
    ${({ noDisplay }) => noDisplay ? css ` display: none; ` : false}
    height: 100%;
`

Menu.Li = styled.li`
    padding-top: 20px;
    cursor: pointer;

    position: relative;
    transition: 0.5s background-color;
    transition: 1s display;
    &:hover{
        background-color: #F8FAFB;
        & > ${Menu} {
            display: block;
        }
    }
    & > ${Menu} > &{
        color: #4C309B;
    }
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