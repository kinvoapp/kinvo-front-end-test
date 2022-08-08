import { ContainerInputs, RendaFixas, RendaFixasBody, CardRendaFixas, RendaFixasHeader } from './styles';

import InputOrdenacao from '../inputs/InputOrdenacao';
import InputSearch from '../inputs/InputSearch';
import { useEffect, useMemo, useState } from 'react';

import RendaFixasService from '../../services/RendaFixasService';

export default function MinhasRendasFixas() {
  const [rendaFixas, setRendaFixas] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [orderBy, setOrderBy] = useState("");
  const [filter, setFilter] = useState("");

  const filteredProducts = useMemo(() => {

    if (!filter)
      return rendaFixas.sort((a, b) => b.position[orderBy] - a.position[orderBy]);

    return rendaFixas
      .sort((a, b) => b.position[orderBy] - a.position[orderBy])
      .filter((rendaFixa) =>
        rendaFixa.fixedIncome.name.toLowerCase().includes(filter.toLowerCase())
      );
  }, [filter, rendaFixas, orderBy]);


  const pages = Math.ceil(filteredProducts.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = filteredProducts.slice(startIndex, endIndex);


  async function loadRendaFixas() {
    const rendaFixasList = await RendaFixasService.getRendaFixas();
    setRendaFixas(rendaFixasList.data.snapshotByProduct);
  }

  useEffect(() => {
    loadRendaFixas();
  }, []);


  return (
    <>
      {currentItens && currentItens.length && <RendaFixas>
        <RendaFixasHeader>
          <h3>Minhas Rendas Fixas</h3>
          <ContainerInputs>
            <InputOrdenacao
              orderBy={orderBy}
              setOrderBy={setOrderBy}
            />
            <InputSearch
              filter={filter}
              setFilter={setFilter}
            />
          </ContainerInputs>
        </RendaFixasHeader>
        {currentItens &&
          currentItens.map((obj, index) => (
            <RendaFixasBody key={index} product={obj}>
              <CardRendaFixas>
                <div className='title'>TITULO</div>
                <div className='container-dados'>
                  <div className='container-fixedIncome-name'>
                    <p className='fixedIncome-name'>{obj.fixedIncome.name}</p>
                  </div>
                  <div>
                    <p className='fixedIncome-bondType-label'>CLASSE</p>
                    <p className='fixedIncome-bondType'>{obj.fixedIncome.bondType}</p>
                  </div>
                </div>
              </CardRendaFixas>
              <CardRendaFixas>
                <div className='title'>RESULTADO</div>
                <div className='container-resultado'>
                  <div className='div-values'>
                    <p className='position-label'>VALOR INVES.</p>
                    <p className='position-value'>{obj.position.valueApplied}</p>
                  </div>
                  <div className='div-values'>
                    <p className='position-label'>SALDO BRUTO</p>
                    <p className='position-value'>{obj.position.equity}</p>
                  </div>
                  <div className='div-values'>
                    <p className='position-label'>RENT.</p>
                    <p className='position-value'>{obj.position.profitability}</p>
                  </div>
                  <div className='div-values'>
                    <p className='position-label'>% DA CART.</p>
                    <p className='position-value'>{obj.position.portfolioPercentage}</p>
                  </div>
                  <div className='div-values'>
                    <p className='position-label'>{obj.position.indexerLabel}</p>
                    <p className='position-value'>{obj.position.indexerValue}</p>
                  </div>
                  <div className='div-values'>
                    <p className='position-label'>SOBRE CDI</p>
                    <p className='position-value'>{obj.position.percentageOverIndexer}</p>
                  </div>
                </div>
              </CardRendaFixas>
              <CardRendaFixas>
                <div className='title'>VENCIMENTO</div>
                <div className='container-dados'>
                  <div className='div-values'>
                    <p className='due-label'>DATA VENC.</p>
                    <p className='due-value'>{obj.due.date}</p>
                  </div>
                  <div className='div-values'>
                    <p className='due-label'>DIAS ATÉ VENC</p>
                    <p className='due-value'>{obj.due.daysUntilExpiration}</p>
                  </div>
                </div>
              </CardRendaFixas>
            </RendaFixasBody>
          ))}
        <div className='button-container'>
          {Array.from(Array(pages), (item, index) => {
            return <button className='pagination' value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index}</button>
          })}
        </div>
      </RendaFixas>}
    </>
  )
}


//