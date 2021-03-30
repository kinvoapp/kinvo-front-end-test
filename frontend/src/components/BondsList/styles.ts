import styled from 'styled-components';

export const BondItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px 21px 20px 20px;
  gap: 10px;
  border-top: 1px solid #eef2f4;
  &:nth-of-type(2n) {
    background-color: #f8fafb;
  }
  &:last-child {
    border-bottom: 1px solid #eef2f4;
  }
`;
