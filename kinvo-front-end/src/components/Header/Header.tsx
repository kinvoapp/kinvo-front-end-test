import { Wrapper, HeaderOption } from './styles';
import kinvo from '../../assets/svg/header/kinvo.svg';
import equity from '../../assets/svg/header/equity.svg';
import appliedvalue from '../../assets/svg/header/appliedvalue.svg';
import profit from '../../assets/svg/header/profit.svg';
import dropdown from '../../assets/svg/header/dropdown.svg';
import menu from '../../assets/svg/header/menu.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';



interface HeaderInfoType {
  
  img: string;
  name: string,
  value: string

}


export default function Header() {
  const [portfolioData, setPortfolioData] = useState<HeaderInfoType[]>([]);

  const getData = async () => {
    await api.get('').then((response: { data: any; }) => {
      const res = response.data.data.snapshotByPortfolio;

      setPortfolioData([
        {
          img: equity,
          name: 'SALDO BRUTO',
          value: res.equity,
        },
        {
          img: appliedvalue,
          name: 'VALOR APLICADO',
          value: res.valueApplied,
        },
        {
          img: profit,
          name: 'RENTABILIDADE',
          value: `${res.percentageProfit}%`
        },
      ])
    }).catch(error => {
      console.log(error);
    })
  }

  

  useEffect(() => {
    getData();
  }, [])



  return (
    <Wrapper>
      <img className='kinvo' src={kinvo} alt='kinvo'/>
      <div>
        {portfolioData.map((hoptions) => {
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
