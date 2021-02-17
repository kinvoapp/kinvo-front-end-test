import ResumoCarteiraIcon from '../../assets/side-menu/resumo-carteira.svg';
import MeusProdutosIcon from '../../assets/side-menu/meus-produtos.svg';
import MeusProventosIcon from '../../assets/side-menu/meus-proventos.svg';
import ClasseDeAtivosIcon from '../../assets/side-menu/classe-ativos.svg';
import RentabilidadeRealIcon from '../../assets/side-menu/rentabilidade-real.svg';
import ProjecaoCarteiraIcon from '../../assets/side-menu/projecao-carteira.svg';
import RiscoRetornoIcon from '../../assets/side-menu/risco-retorno.svg';
import CoberturaFgcIcon from '../../assets/side-menu/cobertura-fgc.svg';

const MenuOptionsList = [
  { Id: 1, Description: 'Resumo Da Carteira', Icon: ResumoCarteiraIcon },
  { Id: 2, Description: 'Meus Produtos', Icon: MeusProdutosIcon },
  { Id: 3, Description: 'Meus Proventos', Icon: MeusProventosIcon },
  {
    Id: 4,
    Description: 'Classe De Ativos',
    Icon: ClasseDeAtivosIcon,
    SubMenu: [{ Description: 'Ação' }, { Description: 'Fundo' }, { Description: 'Fundo Imobiliário' }, { Description: 'Fundo Renda Fixa' }],
  },
  { Id: 5, Description: 'Rentabilidade Real', Icon: RentabilidadeRealIcon },
  { Id: 6, Description: 'Projecao Da Carteira', Icon: ProjecaoCarteiraIcon },
  { Id: 7, Description: 'Risco x Retorno', Icon: RiscoRetornoIcon },
  { Id: 8, Description: 'Cobertura Do FGC', Icon: CoberturaFgcIcon },
];

export default MenuOptionsList;
