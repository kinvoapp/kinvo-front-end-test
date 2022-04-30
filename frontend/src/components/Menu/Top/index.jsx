import logo from '../../../assets/logo.svg'
import topMenu1 from '../../../assets/icones/topMenu1.svg'
import topMenu2 from '../../../assets/icones/topMenu2.svg'
import topMenu3 from '../../../assets/icones/topMenu3.svg'
import topMenu4 from '../../../assets/icones/topMenu4.svg'
import topMenu5 from '../../../assets/icones/topMenu5.svg'

import { Circle, Container, Information1, Information2, Informations, Item, Logo, MenuItens } from './styles'

export function Top(){
    return(
        <header>
            <Container>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>

                <MenuItens>
                    <Item>
                        <Circle>
                            <img src={topMenu1} alt="Menu1" />
                        </Circle>
                        <Informations>
                            <Information1>Saldo Bruto</Information1>
                            <Information2>130.521.230,02</Information2>
                        </Informations>
                    </Item>
                    <Item>
                        <Circle>
                            <img src={topMenu2} alt="Menu1" />
                        </Circle>
                        <Informations>
                            <Information1>Valor Aplicado</Information1>
                            <Information2>521.230,02</Information2>
                        </Informations>
                    </Item>
                    <Item>
                        <Circle>
                            <img src={topMenu3} alt="Menu1" />
                        </Circle>
                        <Informations>
                            <Information1>Rentabilidade</Information1>
                            <Information2>2,34%</Information2>
                        </Informations>
                    </Item>
                    <Item>
                        <Circle>
                            <img src={topMenu4} alt="Menu1" />
                        </Circle>
                        <Informations>
                            <Information1>Carteira</Information1>
                            <Information2>Minha Carteira</Information2>
                        </Informations>
                    </Item>
                    <Item>
                        <Circle>
                            <img src={topMenu5} alt="Menu1" />
                        </Circle>
                    </Item>
                </MenuItens>

            </Container>
        </header>
    )
}