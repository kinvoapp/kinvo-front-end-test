import styled, { css } from 'styled-components';
import { MyButtonIcon } from '../utils/styles';

const Menu = styled.ul`
    background-color: #fff;
    ${({ noListStyle }) => noListStyle ?
                                    css` 
                                        list-style: none; 
                                    ` :
                                        css`list-style-type: disc;`
    }
    
    ${({ noDisplay }) => noDisplay ? css` display: none; ` : false}
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
        & ${MyButtonIcon}{
            background-color: #4C309B;
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
    padding-bottom: 20px;
`;

export {
    Menu
}