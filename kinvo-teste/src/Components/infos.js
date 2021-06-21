import { useGlobalContext } from '../context'
import RendaFixa from './subTopicos/rendaFixa'
import Erro from './erro'

const Infos = () => {
    const {isLoading, erroConnection, siteSubTopic} = useGlobalContext()

  return (
    isLoading
    ?
    <article className='infos-container'><img src="./imgs/preloader.gif" alt="carregando" className='loading-gif'/></article>
    :
    erroConnection
      ?
      <article className='infos-container'><Erro /></article>
      :
      siteSubTopic === 'Fundo Renda Fixa' && <RendaFixa />
  )
}

export default Infos
