import styled from 'styled-components';

import searchIcon from '../../assets/icons/search-icon.svg';

export const BondsContent = styled.section`
  background: white;
  margin: 15px 0 60px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 4%);
  padding: 15px 0 25px 0%;

  header {
    display: flex;
    padding: 0 21px 12px 20px;
    h3 {
      font-weight: 500;
      font-size: 18px;
      color: #627179;
      margin-top: 2px;
    }

    form {
      margin-left: auto;
      select,
      input {
        height: 32px;
        border-radius: 10px;
        border: 1px solid #d6d9dd;
        background: transparent;
        color: #707b81;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 12px;
      }

      .selectWrapper {
        float: left;
        position: relative;
        margin-right: 17px;
        &:after {
          content: '';
          width: 8px;
          height: 8px;
          display: inline-block;
          border-right: 2px solid #707b81;
          border-bottom: 2px solid #707b81;
          position: absolute;
          right: 12px;
          top: 50%;
          margin-top: -8px;
          transform: rotate(45deg);
        }
      }

      select {
        appearance: none;
        box-shadow: none;
        background: white;
        padding: 0 12px 0 10px;
      }

      .searchTerm {
        float: left;
        background: url(${searchIcon}) no-repeat 8px center;
        input {
          width: 240px;
          padding: 0 0 0 30px;
        }
      }
    }
  }
`;
