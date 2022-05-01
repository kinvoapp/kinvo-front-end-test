import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 60%;
  img{
    width: 30px;
    height: 30px;
  }
  &>div{
    display: flex;
    justify-content: space-between;
    width: 55%;
  }
  h3, p{
    color: #707B81;
  }
`;

export default Container;
