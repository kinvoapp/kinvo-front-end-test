import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Item = styled.div`
  display: flex;

  div {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #dae0e3;

    &:first-of-type {
      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 9px;
        text-transform: uppercase;
        color: #4e5b61;
        margin: 0;
        padding: 0;

        svg {
          padding-left: 10px;
          margin-right: 10px;
        }
      }
    }
  }
`;
