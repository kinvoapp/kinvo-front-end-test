import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Background from '../Background';
import './MinhasRendasFixas.css';
import LineList from './component/LineList';
import Pagination from './component/Pagination';

const Inputs = Styled.div`
    font-family:'Montserrat';
    
    display:flex;
    padding:15px 15px 0px;
    justify-content: space-around;
    width:40%;
    input, select{
        border-radius: 10px;
				padding-left:10px;
        border: 1px solid #D6D9DD;
    }
    input:focus, select:focus{
        outline: 0;
    }
    input{
        width:240px;
    }
    select{
        color:#707B81;
        width: 155px;
    }
		option{

			font-size:16px;
		}
`;


function MinhasRendasFixas(props) {


	const [snapshotByProduc,setSnapshotByProduct] = useState(props && props.lista);
	const snapshotByProduct = props && props.lista ;
	const [textFilter, setTextFilter] = useState('');
	const [pageFilter, setPageFilter] = useState(1);
	const [functionFilter, setFunctionFilter] = useState()
	function filter(e) {

		if (e._reactName.includes('onKeyUp')) {
			setTextFilter(e.target.value);
		} else {
			console.log(e.target.value)
			switch (e.target.value) {
				case '0':
					setSnapshotByProduct(props && props.lista.map((produtos) => <LineList dados={produtos}></LineList>).sort())
					break;
				case '1':
				case '2':

				break;
				case '3': 
				
				break;
				case '4':
					
					break;
				default:
					setSnapshotByProduct(props && props.lista.map((produtos) => <LineList dados={produtos}></LineList>).sort())
					break;
			}

		}
		//

	}
	function onPageChanged(e) {
		console.log(e.target.value);
		let offset = (e.target.value - 1) * 5
		setPageFilter(offset)
	}

	const func = () => {

	}
	return (
		<Background>
			<div className="header">
				<h2>Minhas Rendas Fixas</h2>
				<Inputs>
					<select onChange={filter}>
						<option value={0} selected>Ordenar Por</option>
						<option value={1}>Ordem Alfabética | A-Z</option>
						<option value={2}>Valor Aplicado | Maior - Menor</option>
						<option value={3}>Rentabilidade | Melhor - Pior</option>
						<option value={4}>Data de Vencimento</option>
					</select>
					<input type="text" onKeyUp={filter}></input>
				</Inputs>
			</div>
			<div className="Body">
				{(snapshotByProduct && snapshotByProduct.sort((a, b) => (a.fixedIncome.name > b.fixedIncome.name) ? 1 :
						((b.fixedIncome.name > a.fixedIncome.name) ? -1 : 0))
						.filter((produtos) => produtos.fixedIncome.name.toLowerCase().includes(textFilter.toLowerCase()))
						.map((produtos) => <LineList dados={produtos}></LineList>).slice(pageFilter, pageFilter + 5))}
			</div>
			<div className="footer">
				<Pagination onChangePage={onPageChanged} totalRecords={snapshotByProduct.length} pageLimit={5} pageNeighbours={1} onPageChanged={onPageChanged}>

				</Pagination>
			</div>
		</Background>
	)
}

export default MinhasRendasFixas;