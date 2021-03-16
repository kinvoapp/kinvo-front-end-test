import { Container } from './style';
import SectionButton from './sections';

const MenuIcon1Src = '/images/menuIcon1.svg';
const MenuIcon2Src = '/images/menuIcon2.svg';
const MenuIcon3Src = '/images/menuIcon3.svg';
const MenuIcon4Src = '/images/menuIcon4.svg';
const MenuIcon5Src = '/images/menuIcon5.svg';
const MenuIcon6Src = '/images/menuIcon6.svg';
const MenuIcon7Src = '/images/menuIcon7.svg';
const MenuIcon8Src = '/images/menuIcon8.svg';

export default function SideMenu() {
  return (
    <Container>
      <SectionButton
        disabled={true}
        title={'Resumo da carteira'}
        iconSrc={MenuIcon1Src}
      />
      <SectionButton
        disabled={true}
        title={'Meus produtos'}
        iconSrc={MenuIcon2Src}
      />
      <SectionButton
        disabled={true}
        title={'Meus proventos'}
        iconSrc={MenuIcon3Src}
      />
      <SectionButton
        disabled={false}
        title={'Classe de ativos'}
        iconSrc={MenuIcon4Src}
        openedOptions={[
          'ação',
          'fundo',
          'fundo imobiliário',
          'fundo renda fixa',
        ]}
      />
      <SectionButton
        disabled={true}
        title={'Rentabilidade Real'}
        iconSrc={MenuIcon5Src}
      />
      <SectionButton
        disabled={true}
        title={'Projeção da carteira'}
        iconSrc={MenuIcon6Src}
      />
      <SectionButton
        disabled={true}
        title={'Risco x Retorno'}
        iconSrc={MenuIcon7Src}
      />
      <SectionButton
        disabled={true}
        title={'Cobertura do FGC'}
        iconSrc={MenuIcon8Src}
      />
    </Container>
  );
}
