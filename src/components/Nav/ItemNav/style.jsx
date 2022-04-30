import styled from 'styled-components'

export const Container = styled.a`

  position: relative;
  min-height: 67px;
  list-style: none;
  display:flex;
  align-items: center;
  padding: 0 15px;
  gap: 15px;
  cursor: pointer;
  color: var(--text-color-header);
  border-bottom: 1px solid rgba(204, 207, 209, 0.35);

  &::after{

    content: "";
    position: absolute;
    width: 6px;
    height: 10px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${props => props.arrow})
  }
  `

export const Text = styled.span`
  
  
  `