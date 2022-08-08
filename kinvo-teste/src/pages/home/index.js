import { ContainerGrafico, Container, Card, Title } from './styles';

import Grafico from '../../styles/SVGs/Grafico';
import RendaFixa from '../../components/rendaFixa';
import MinhasRendasFixas from '../../components/minhasRendasFixas';
import Header from '../../components/header';
import AsideMenu from '../../components/asideMenu';

export default function Home() {
  return (
    <div>
    <Header />
    <Container>
      <AsideMenu />
      <div>
        <RendaFixa />
        <ContainerGrafico>
          <Grafico />
        </ContainerGrafico>
        <MinhasRendasFixas />
      </div>
    </Container>
    </div>
  )
}