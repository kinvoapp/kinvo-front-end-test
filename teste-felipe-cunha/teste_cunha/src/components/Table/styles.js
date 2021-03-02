import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;

`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Box = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-top: 25px;
  overflow: hidden;
  overflow-y: scroll;
  height: 70vh;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px 0;

  h1 {
    font-weight: 500;
    font-size: 18px;
    color: #707b81;
  }
  .input-container {
    background: white;
    border-radius: 17px;
    display: flex;
    border: 1px solid #D4DCDF;
    align-items: center;
    padding: 10px;
    min-width: 250px;
    min-height: 30px;
    margin-top: 12px;
    input {
      background: none;
      border: none;
      padding: 0 10px;
      color: black;

      }
    }

  }
`;
