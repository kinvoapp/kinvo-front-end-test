import { Sumary } from "../../components/Sumary";
import grafico from '../../assets/grafico.png'
import { Ativos, Image } from "./styles";
import info from '../../assets/iconinfo.svg'
import { useContext } from "react";
import { AtivosContext } from "../../AtivosContext";

// tipagem dos dados da API


export default function Dashboard() {
  const ativos = useContext(AtivosContext); 
  
  return (
    <>
       <Sumary/> 
      <Image>
        <div>
          <img src={grafico} alt="grafico" />
        </div>
      </Image>
      <Ativos>
        <div className="title">
          <h1>Minhas Rendas Fixas</h1>
        </div>

        {/* listagem dos dados MINHAS RENDAS FIXAS*/}
        {ativos?.snapshotByProduct?.map((item, index) => (
          
          <div key={index} className="cards">            
            <div className="cardTitulo">
              <div className="titulo">
                <h5>Título</h5>
                <img src={info} alt="info" />
              </div>

              <div className="footerCard">
                <div className="ativo">
                  <p>{item.fixedIncome.name}</p>

                </div>
                <div className="classe">
                  <h6>CLASSE</h6>
                  <h4>{item.fixedIncome.bondType}</h4>
                </div>
              </div>
            </div>

            <div className="cardPosicao">
              <div className="posicao">
                <h5>Minha Posição</h5>
                <img src={info} alt="info" />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>VALOR INVEST</th>
                    <th>SALDO BRUTO</th>
                    <th>RENT</th>
                    <th>% DA CART</th>
                    <th>CDI</th>
                    <th>SOBRE CDI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.position.valueApplied}</td>
                    <td>{item.position.equity}</td>
                    <td>{item.position.profitability}</td>
                    <td>{item.position.portfolioPercentage}</td>
                    <td>{item.position.indexerValue}</td>
                    <td>{item.position.percentageOverIndexer}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cardVencimento">
              <div className="vencimento">
                <h5>Vencimento</h5>
                <img src={info} alt="info" />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>DATA VENC.</th>
                    <th>DIAS ATÉ VENC.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.due.date}</td>
                    <td>{item.due.daysUntilExpiration}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </Ativos>
    </>


  )
}