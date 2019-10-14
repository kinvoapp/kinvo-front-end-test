import styled from 'styled-components';
import MagnifyingGlassIcon from '../../../../images/searchIcon.svg';

export const Container = styled.div`

  padding: 20px 10px 0 20px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  
  h4{
    margin-top: 5px;
  }

`;
export const SearchTool = styled.div`

    background: #EEF2F4;
    border-radius: 30px;

`;

export const SearchIcon = styled.img.attrs({
  src: MagnifyingGlassIcon,
  alt: 'Ícone de busca',
})`
  padding-top: 10px;
  padding-right: 10px;
  margin-left: 10px;
  
`;

export const SearchProductInput = styled.input`

  background: #EEF2F4;
  border: none;
  border-radius: 30px;
  height: 33px;
  width: 250px;

`;
