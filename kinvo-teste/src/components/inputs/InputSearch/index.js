import { Container } from './styles';
import LupaSVG from '../../../styles/SVGs/LupaSVG';
import { Icon, Input } from 'semantic-ui-react'

export default function inputSearch({filter, setFilter}) {
  return (
    <Container>
      <input 
        type="text" 
        placeholder='Pesquise aqui...'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}/>
    </Container>
  )

};