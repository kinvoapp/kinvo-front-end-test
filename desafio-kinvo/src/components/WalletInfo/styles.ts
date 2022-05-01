import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  h3 {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 9px;
    color: #707B81;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    color: #707B81;
    margin-right: 40px;
  }
  img {
    margin-left: 40px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }
  div {
    display: flex;
    justify-content:space-between;
    flex-direction: column;
  }
`;
export default Container;
