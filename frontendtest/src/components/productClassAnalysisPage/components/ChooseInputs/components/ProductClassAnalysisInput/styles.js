import styled from 'styled-components';

export const Container = styled.a`

  text-decoration: none;

  &:not(:last-child){
    margin-right: 10px;
  }
`;

export const ChooseClass = styled.div`

  display: flex;
  height: 65px;
  width: 250px;
  background: ${
  (props) => (props.isInputActive && '#F8FAFB') || '#EEF2F4'
};
  border-radius: 15px 15px 0 0;
  margin-top: 20px;;
  text-decoration: none;

  p{
    padding: 30px 0 0 10%;
  }

  &:hover{
    background: #F8FAFB;
  }

`;
