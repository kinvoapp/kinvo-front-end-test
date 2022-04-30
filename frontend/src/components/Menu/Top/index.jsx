import logo from '../../../assets/logo.svg'
import topMenu1 from '../../../assets/icones/topMenu1.svg'
import topMenu2 from '../../../assets/icones/topMenu2.svg'
import topMenu3 from '../../../assets/icones/topMenu3.svg'
import topMenu4 from '../../../assets/icones/topMenu4.svg'
import topMenu5 from '../../../assets/icones/topMenu5.svg'

import {
    Container,
    Logo,
    MenuItens
} from './styles'

import { TopItem } from '../TopItem'

export function Top({
    rendaFixa
}){
    return(
        <header>
            <Container>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>

                <MenuItens>
                    <TopItem 
                        imgSource={topMenu1}
                        title='Saldo Bruto'
                        value={`R$ ${rendaFixa.equity}`}
                    />
                    <TopItem 
                        imgSource={topMenu2}
                        title='Valor Aplicado'
                        value={`R$ ${rendaFixa.valueApplied}`}
                    />
                    <TopItem 
                        imgSource={topMenu3}
                        title='Rentabilidade'
                        value={`${rendaFixa.percentageProfit}%`}
                    />
                    <TopItem 
                        imgSource={topMenu4}
                        title='Saldo Bruto'
                        value='Minha Carteira'
                        circleBackground='#4c309b'
                    />
                    <TopItem 
                        imgSource={topMenu5}
                        title=''
                        value=''
                        circleBackground='#4c309b'
                    />
                </MenuItens>
            </Container>
        </header>
    )
}