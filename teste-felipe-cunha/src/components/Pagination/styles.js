import styled from 'styled-components';

export const Number = styled.div`
    width: 5%;
    display: flex;
    justify-content: space-evenly;

    a {
        color: grey;
        float: left;
        padding: 8px 13px;
        margin-right: 5px;
        text-decoration: none;
        border: 1px solid #dae0e3;
        border-radius: 15%;
      }
    
      a.active {
        background-color: #dae0e3;
        color: white;
      }
`;

export const Footer = styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      position: sticky;
      bottom: 0;
      left: 50;
      border-top: 1px solid #dae0e3;
      padding-top: 12px;
`;