import { useGlobalContext } from '../context'
import RendaFixa from './rendaFixa'

const Infos = () => {
    const {isLoading, erroConnection, siteSubTopic} = useGlobalContext()

  return (
    isLoading
    ?
    <article className='infos-container'><img src="./imgs/preloader.gif" alt="carregando" /></article>
    :
    erroConnection
      ?
      <article className='infos-container'>Deu ruim...</article>
      :
      siteSubTopic === 'Fundo Renda Fixa' && <RendaFixa />
  )
}

export default Infos
