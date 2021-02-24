
import Styled from 'styled-components';
import iconarrow from '../../../../../../assets/icons/icon-left-arrow.svg';
import PropTypes from 'prop-types';

const Button = Styled.button`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width:35px;
  height:35px;
  border: 1px solid #EDEEF0;
  border-radius:5px;
  background-color:white;
  transform:${props => props.rotate};
  color:#C2C5CC;
  margin-left:5px;
  &:hover{
    cursor:pointer;
  }
  &:focus{
    outline:0;
    background-color:#DCE0E3;
    color:white;
  }
`
const Ul = Styled.ul`

  display:flex;
  justify-content:center;
  align-items:center;

`;
function Pagination(props){

  const totalPages = Math.ceil(props.totalRecords / props.pageLimit);
  console.log('Número total de registros'+props.totalRecords+' '+'Quantidade de páginas: '+totalPages);

  
  const Pages = [];

  for(let i = 1;i<=totalPages;i++){
    Pages.push(<Button value={i} onClick={props.onChangePage}>{i}</Button>)
  }
  return(
    <Ul>
      <Button rotate={'rotate(0deg)'}><img src={iconarrow}></img></Button>
        {Pages}
      <Button rotate={'rotate(180deg)'}><img src={iconarrow}></img></Button>
    </Ul>
  )
}

export default Pagination;