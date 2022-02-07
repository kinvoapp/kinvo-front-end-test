import styled from 'styled-components'

interface Iprops {
    color: string;
}

export const ProductStatsCard = styled.div<Iprops>`
  display: flex;
  background: #FFFF;
  border: 2px solid #DAE0E3;
  border-radius: 10px;
  justify-content: center;
  min-width: 250px;
  flex-direction: column;
  align-items: start;
  padding: 4%;

  .card_top{
      display: flex;
      width:100%
      justify-content: flex-start;
      margin-bottom:25px;
  }
  .card_bottom{
    display: flex;
    width:100%;
    justify-content: space-between;
    align-items:center;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
  }
  p{
      font-size: 15px;
      margin-right: 8px;
  }

  h3 {
      color: ${props => props.color};;
      margin: 0;
  }

  h4{
      width:40%;
      margin: 0;
      text-align: start;
  }
`