import styled from 'styled-components'

export const Box = styled.div`
  
  display: flex;
  gap: 5px;

  div{

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 12px;
  }
  `

export const Title = styled.span`

  color: var(--text-color-header);
  font-size: 10px;
  `

export const Amount = styled.span`

  color: var(--text-color-header);
  font-weight: bold;
  `