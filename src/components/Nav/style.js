import styled from 'styled-components'

export const LateralMenu = styled.nav`
  
  grid-area: nav;
  width: 100%;

  ul{
    padding: 20px;
  }
  `

  export const SubMenuContainer = styled.div`
  
    display: block;
    height: ${props => props.render ? '192px' : '0px'};
    overflow: hidden;
    transition: all 600ms;
  `