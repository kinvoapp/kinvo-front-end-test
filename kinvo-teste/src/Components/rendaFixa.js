import { useGlobalContext } from '../context'
import { BiSearch, BiInfoCircle } from "react-icons/bi";



const RendaFixa = () => {
    const {portfolio, products, updateSort, sort} = useGlobalContext()

    return (
    <article className='infos-container'>
        <h1 className='infos-container-h1'>Renda Fixa</h1>
        
        <section className='infos-returns'>
          {portfolio.map((returns, index)=>{
            const {title, value, type} = returns
            
            return (
              <div className='returns-box' key={index}>
                <img src="./imgs/infos/retangulo.svg" alt="barra" />
                <div className='returns-infos'>
                  <h2 className='returns-h2'>{title.toUpperCase()}</h2>
                  <h1 className='returns-h1'>
                    {type==='moeda' ? `R$ ${value.toLocaleString()}` : `${value.toLocaleString()}%`}
                  </h1>
                </div>
              </div>
            )
          })}
        </section>

        <section className='meus-rendimentos-box'>
          <section className='meus-rendimentos-header'>
            <h1 className='meus-rendimentos-header-h1'>Minhas Rendas Fixas</h1>
            <form className='meus-rendimentos-header-forms' onSubmit={(e)=> e.preventDefault()}>
              <select className='form-select' name='sort' value={sort} onChange={updateSort}>
                <option value="default" hidden>Ordernar por</option>
                <option value="titulo">Título</option>
                <option value="classe">Classe</option>
                <option value="prodValorAplicado">Valor Investido</option>
                <option value="prodSaldoBruto">Saldo Bruto</option>
                <option value="diasVenc">Dias para Vencer</option>
              </select>
              <div className='search-box'>
                <BiSearch className='search-icon'/>
                <input type="text" className='search-body' />
              </div>
            </form>
          </section>
        
          <section className='meus-produtos-container'>
          {products.map((product, index)=>{
            const {titulo, classe, prodValorAplicado, prodSaldoBruto, prodRentabilidade, porcentagemCart, referencial, referencialValor, porcentagemSobreRef, dataVenc, diasVenc} = product
            return (
              <section className={index%2===0 ? `meus-produtos-box` : `meus-produtos-box-grey`} key={index}>
                
                <div className='meus-produtos-titulo'>
                  <div className='titulo-topo'>
                    <h3 className='meus-produtos-h3'>TÍTULO</h3>
                    <BiInfoCircle className='inform-icon'/>
                  </div>
                  <div className='titulo-base'>
                    <h2 className='meus-produtos-h2'>{titulo}</h2>
                    <div className='titulo-base-indvidual'>
                      <h3 className='meus-produtos-h3'>CLASSE</h3>
                      <h1 className='meus-produtos-h1'>{classe}</h1>
                    </div>
                  </div>
                </div>

                <div className='meus-produtos-resultado'>
                  <div className='titulo-topo'>
                    <h3 className='meus-produtos-h3'>RESULTADO</h3>
                    <BiInfoCircle className='inform-icon'/>
                  </div>
                  <div className='titulo-base'>
                    <div className='titulo-base-indvidual'>
                      <h3 className='meus-produtos-h3'>VALOR INVES.</h3>
                      <h1 className='meus-produtos-h1-resultados'>{prodValorAplicado}</h1>
                    </div>
                    <div className='titulo-base-indvidual'>
                      <h3 className='meus-produtos-h3'>SALDO BRUTO</h3>
                      <h1 className='meus-produtos-h1-resultados'>{prodSaldoBruto}</h1>
                    </div>
                    <div className='titulo-base-indvidual'>
                      <h3 className='meus-produtos-h3'>RENT.</h3>
                      <h1 className='meus-produtos-h1-resultados'>{`${prodRentabilidade}%`}</h1>
                    </div>
                    <div className='titulo-base-indvidual'>
                      <h3 className='meus-produtos-h3'>% DA CART.</h3>
                      <h1 className='meus-produtos-h1-resultados'>{`${porcentagemCart}%`}</h1>
                    </div>
                    <div className='titulo-base-indvidual'>
                      <h3 className='meus-produtos-h3'>{referencial}</h3>
                      <h1 className='meus-produtos-h1-resultados'>{referencialValor}</h1>
                    </div>
                    <div className='titulo-base-indvidual'>
                      <h3 className='meus-produtos-h3'>{`SOBRE ${referencial}`}</h3>
                      <h1 className='meus-produtos-h1-resultados'>{porcentagemSobreRef}</h1>
                    </div>
                  </div>
                </div>

                <div className='meus-produtos-data'>
                  <div className='titulo-topo'>
                    <h3 className='meus-produtos-h3'>VENCIMENTO</h3>
                    <BiInfoCircle className='inform-icon'/>
                  </div>
                  <div className='titulo-base'>
                    <div className='titulo-base-indvidual'>
                      <h2 className='meus-produtos-h3'>DATA VENC.</h2>
                      <h1 className='meus-produtos-h1-datas'>{dataVenc}</h1>
                    </div>
                    <div className='titulo-base-indvidual'>
                      <h2 className='meus-produtos-h3'>DIAS ATÉ VENC.</h2>
                      <h1 className='meus-produtos-h1-datas'>{diasVenc}</h1>
                    </div>
                  </div>
                </div>
              </section>
            )
          })}
          </section>  
        </section>
    </article>
    )
}

export default RendaFixa