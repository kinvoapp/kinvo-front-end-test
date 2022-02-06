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
    margin: 1%;
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
  width: 35%;
  height: 100px;
  flex-direction: row;
  align-items: center;  

  input {
    width: 300px;
    height: 40px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #D6D9DD;
    border-radius: 10px;
    opacity: 1;
  }
  select{
    width: 200px;
    height: 45px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #D6D9DD;
    border-radius: 10px;
    opacity: 1;
  }
`