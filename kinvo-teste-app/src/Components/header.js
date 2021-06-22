import { useGlobalContext } from '../context'
import { BiChevronDown, BiMenu } from "react-icons/bi";

const Header = () => {
    // const {discoverBook, goSingleBook} = useGlobalContext()
    const headInfos = [
        {
            title: 'saldo bruto',
            icon:'/imgs/header/icon - saldo bruto.svg',
            value: '130.521.230,02'
        },
        {
            title: 'valor aplicado',
            icon:'/imgs/header/icon - valor aplicado.svg',
            value: '521.230,02'
        },
        {
            title: 'rentabilidade',
            icon:'/imgs/header/icon - rentabilidade.svg',
            value: '2,34%'
        },
    ]

  return (
    <article className='header-container'>
        <img src="./imgs/header/kinvo premium.svg" alt="kinvo logo" className='img-logo'/>
        <section className='header-infos'>
            {headInfos.map((info, index)=>{
                const {title, icon, value} = info
                return (
                    <div className='infos-block' key={index}>
                        <img src={icon} alt={title} className='header-icon'/>
                        <div className='infos-values'>
                            <h2 className='infos-h2'>{title.toUpperCase()}</h2>
                            <h1 className='infos-h1'>{value}</h1>
                        </div>
                    </div>
                )
            })}
            <div className='infos-block'>
                <BiChevronDown className='header-icon-btn'/>
                <div className='infos-values'>
                    <h2 className='infos-h2-carteira'>CARTEIRA</h2>
                    <h1 className='infos-h1'>Minha Carteira</h1>
                </div>
            </div>
            <div className='infos-block'>
                <BiMenu className='header-icon-btn'/>
            </div>
        </section>
    </article>
  )
}

export default Header
