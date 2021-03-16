import styled from 'styled-components';
import search from '../../../assets/svg/content/search.svg';

export const Wrapper = styled.div`

  display: flex;
  margin-bottom: 12px;
`;

export const DropdownButton = styled.button`

  width: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #D6D9DD;
  background-color:#FFF;
  margin-right: 10px;
  padding: 8px;
`;

export const SearchInput = styled.input`

  width: 240px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #D6D9DD;
  outline: none;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 4% 50%;
  padding-left: 30px;
`;