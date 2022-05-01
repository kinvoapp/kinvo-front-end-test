import styled from 'styled-components'

export const Box = styled.div`
  
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 160px;
  height: 60px;
  padding-left: 19px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 20px #0000000D;
  border-radius: 10px;
  opacity: 1;

  &::before{

    content: "";
    position: absolute;
    height: 39px;
    left: 10px;
    border-left: solid 2px #DAE0E3;
  }
  `

export const Title = styled.span`
    
  letter-spacing: 0.45px;
  color: var(--text-color-title-main);
  font-size: 10px;
  font-weight: 500;
  `

export const Amount = styled.span`

  color: var(--text-color-component-main);
  font-weight: bold;
  `