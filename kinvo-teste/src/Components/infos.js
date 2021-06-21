import { useGlobalContext } from '../context'
import { BiSearch } from "react-icons/bi";

const Infos = () => {
    const {portfolio, products, isLoading} = useGlobalContext()

  return (
    isLoading
    ?
    <div>loading...</div>
    :
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
              <select className='form-select'>
                <option value="default">Ordernar por</option>
                <option value="classe">Classe</option>
                <option value="titulo">Título</option>
              </select>
              <div className='search-box'>
                <BiSearch className='search-icon'/>
                <input type="text" className='search-body' />
              </div>
            </form>
          </section>
        </section>

        <section className='meus-produtos-container'>
        {products.map((product, index)=>{
          const {titulo, classe, prodValorAplicado, prodSaldoBruto, prodRentabilidade, porcentagemCart, referencial, referencialValor, porcentagemSobreRef, dataVenc, diasVenc} = product
          return (
            <section className='meus-produtos-box' key={index}>
              <div className='meus-produtos-titulo'>
                <h3 className='meus-produtos-h3'></h3>
              </div>
            </section>
          )
        })}
        </section>  
        
    </article>
  )
}

export default Infos
