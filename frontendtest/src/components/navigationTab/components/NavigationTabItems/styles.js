import styled from 'styled-components';

export const Container = styled.nav`

  height: 65px;
  background: ${
  (props) => (props.isActive && '#EEF2F4') || 'white'
};
  border-bottom: 1px solid #DAE0E3;
  display: flex;
  font-size: 15px;
  color: #707B81;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;

  :hover{
    background: rgb(243, 245, 247);
    color: #5D41AC;
    transition: all 0.3s;
  }

`;

export const NavigationTabText = styled.div`

    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    h5,img{
      padding-left: 15px;
    }

`;
