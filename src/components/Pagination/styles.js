import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const PaginationContainer = styled.ul`
  list-style: none;
  display: flex;
`;

export const PaginationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  width: 35px;
  height: 35px;
  margin-right: 9px;
  font-size: 13px;
  border-radius: 5px;
  font-weight: ${props => (props.primary ? '500' : '700')};
  color: ${props => (props.primary ? '#C2C5CC' : '#FFFFFF')};
  background-color: ${props => (props.primary ? '#FFFFFF' : '#DCE0E3')};
  border: ${props => (props.primary ? '1px solid #EDEEF0' : 'none')};
  transition: background 0.1s ease;

  &:hover {
    background-color: ${props => (props.primary ? '#f5f5f5' : '#D3D3D3')};
  }
`;

export const MovePagination = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #edeef0;
  margin-right: 9px;
  transition: background 0.1s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const PaginationIcon = styled.img``;
