import styled from 'styled-components';
import searchIcon from './images/search-icon-2.png';

export const FundsNavTitle = styled.h3`
  font-size: 18px;
  color: #707b81;
  font-family: "Helvetica";
`;

export const FundsNav = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(65px, auto));
  justify-content: space-between;
  align-items: center;
`;

export const FundsNavInputContainer = styled.div`
  position: relative;
  &:before{
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-70%);
    left: 0;
    margin-left: 10px;
    background-image: url(${searchIcon});
    background-size: 15px;
  }
`;

export const FundsNavInput = styled.input`
  color: palevioletred;
  background: #eef2f4;
  border: solid 1px #9da5ac;
  width: 250px;
  height: 33px;
  border-radius: 29px;
  margin-bottom: 0.5em;
  padding-left: 30px;
`;
