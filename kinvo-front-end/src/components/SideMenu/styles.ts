import styled from 'styled-components';

export const Container = styled.div`

  position: absolute;
  top: 90px;
  left: 0;
  bottom: 0;
  width: 226px;
  grid-area: menu;
  background-color: #FFFF;
  flex-direction: column;
  display: flex;
  height: 1000px;
  
  div.wrapper {
    display: flex;
    flex-direction: column;
  }
  
`;

export const Option = styled.button`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: ${(props) => (props.theme === true ? '#F8FAFB' : '#FFF')};
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  height: 67px;
  font-size: 13px;
  font-weight: 600;
  text-align: left;

  div.option {
    display: flex;
    
    p {
      margin-left: 14px;
    }
  }
  
`;


export const  SubOption = styled.button`

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border: none;
  background-color: ${(props) => (props.theme === true ? '#F8FAFB' : '#FFF')};
  border-bottom: 1px solid rgba(0,0,0,0.1);
  height: 47.5px;
  font-size: 13px;
  font-weight: 600;
`;

export const Marker = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #4C309B;
    margin: 0 5px;
`;