import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;  
`

export const FixedIncomeDetails = styled.div`
  display: flex;
  background: #FFFF;
  border: 2px solid #FFFF;
  border-radius:10px;
  width: 100%;
  min-height: 150px;
  margin-top: 2%;
  flex-direction: column;

  .card_conatiner{
    display: grid;
    grid-template-columns: 30% 48% 20%;
    grid-gap: 20px;
  }
   hr{
     width:100%;
     background-color: #CCCFD1;
   }
`

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin: 2%;
  flex-direction: row;
  align-items: center;  
`

export const InputxBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 25%;
  height: 100px;
  flex-direction: row;
  align-items: center;  
`