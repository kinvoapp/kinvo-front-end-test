import styled from "styled-components";

export const FooterBox = styled.footer`
  background: #f2f5f7;
  width: 100%;
  position: fixed;
  bottom: 0;
  color: #707b81;

  div {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    ul {
      display: flex;
      align-items: center;
      li {
        margin-left: 20px;
        img {
          max-width: 25px;
          max-height: 25px;
          width: auto;
          height: auto;
        }
      }
    }
  }
`;
