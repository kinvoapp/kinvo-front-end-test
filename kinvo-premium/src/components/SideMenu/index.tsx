import { Container } from './style';
import SectionButton from './sections';

export default function SideMenu() {
  const options = [
    {title: 'Resumo da carteira', iconSrc: '/images/menuIcon1.svg'},
    {title: 'Meus produtos', iconSrc: '/images/menuIcon2.svg'},
    {title: 'Meus proventos', iconSrc: '/images/menuIcon3.svg'},
    {title: 'Classe de ativo', iconSrc: '/images/menuIcon4.svg', openedOptions:[
      'ação',
      'fundo',
      'fundo imobiliário',
      'fundo renda fixa',
    ]},
    {title: 'Rentabilidade Real', iconSrc: '/images/menuIcon5.svg'},
    {title: 'Projeção da carteira', iconSrc: '/images/menuIcon6.svg'},
    {title: 'Risco x Retorno', iconSrc: '/images/menuIcon7.svg'},
    {title: 'Cobertura do FGC', iconSrc: '/images/menuIcon8.svg'}
  ]
  return (
    <Container>
      {options.map((item) => { return (<SectionButton
        disabled={true}
        title={item.title}
        iconSrc={item.iconSrc}
        openedOptions={item.openedOptions}
        key={item.title}
      />)})}
    </Container>
  );
}
