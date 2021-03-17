import { Container } from './style';
import SectionButton from './sections';

export default function SideMenu() {
  const options = [
    {title: 'Resumo da carteira', iconSrc: '/images/menuIcon1.svg', disabled: true},
    {title: 'Meus produtos', iconSrc: '/images/menuIcon2.svg', disabled: true},
    {title: 'Meus proventos', iconSrc: '/images/menuIcon3.svg', disabled: true},
    {title: 'Classe de ativo', iconSrc: '/images/menuIcon4.svg', disabled: false, openedOptions:[
      'ação',
      'fundo',
      'fundo imobiliário',
      'fundo renda fixa',
    ]},
    {title: 'Rentabilidade Real', iconSrc: '/images/menuIcon5.svg', disabled: true},
    {title: 'Projeção da carteira', iconSrc: '/images/menuIcon6.svg', disabled: true},
    {title: 'Risco x Retorno', iconSrc: '/images/menuIcon7.svg', disabled: true},
    {title: 'Cobertura do FGC', iconSrc: '/images/menuIcon8.svg', disabled: true }
  ]
  return (
    <Container>
      {options.map((item) => { return (<SectionButton
        disabled={item.disabled}
        title={item.title}
        iconSrc={item.iconSrc}
        openedOptions={item.openedOptions}
        key={item.title}
      />)})}
    </Container>
  );
}
