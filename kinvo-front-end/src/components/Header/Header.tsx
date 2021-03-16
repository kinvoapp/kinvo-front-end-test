import { Wrapper, HeaderOption } from './styles';
import kinvo from '../../assets/svg/header/kinvo.svg';
import equity from '../../assets/svg/header/equity.svg';
import appliedvalue from '../../assets/svg/header/appliedvalue.svg';
import profit from '../../assets/svg/header/profit.svg';
import dropdown from '../../assets/svg/header/dropdown.svg';
import menu from '../../assets/svg/header/menu.svg';

export default function Header() {

  const headerOptions = [
    {
      img: equity,
      name: 'SALDO BRUTO',
      value: '130.521.230,02',
    },
    {
      img: appliedvalue,
      name: 'VALOR APLICADO',
      value: '521.230,02',
    },
    {
      img: profit,
      name: 'RENTABILIDADE',
      value: '2,34%',
    },
  ]



  return (
    <Wrapper>
      <img className='kinvo' src={kinvo} alt='kinvo'/>
      <div>
        {headerOptions.map((hoptions) => {
          const { img, name, value } = hoptions;
          return (
            <HeaderOption key={name}>
              <img src={img} alt={name}/>
              <div>
                <p>{name}</p>
                <strong>{value}</strong>
              </div>
            </HeaderOption>
          )
        })}
       
  
        <HeaderOption>
          <button type="button">
            <img src={dropdown} alt='dropdown'/>
          </button>
          <div>
            <p>CARTEIRA</p>
            <strong>Minha Carteira</strong>
          </div>
        </HeaderOption>
        <HeaderOption>
          <button type="button">
            <img src={menu} alt='menu'/>
          </button>
        </HeaderOption>
      </div>
    </Wrapper>
  )
}
