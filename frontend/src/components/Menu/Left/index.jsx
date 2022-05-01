import leftMenu1 from '../../../assets/icones/leftMenu1.svg'
import leftMenu2 from '../../../assets/icones/leftMenu2.svg'
import leftMenu3 from '../../../assets/icones/leftMenu3.svg'
import leftMenu4 from '../../../assets/icones/leftMenu4.svg'
import leftMenu5 from '../../../assets/icones/leftMenu5.svg'
import leftMenu6 from '../../../assets/icones/leftMenu6.svg'
import leftMenu7 from '../../../assets/icones/leftMenu7.svg'
import leftMenu8 from '../../../assets/icones/leftMenu8.svg'

import { Container } from './styles'

import { LeftItem } from '../LeftItem'


export function Left(){
    return(
        <Container>
            <ul>

                <LeftItem
                    sobMenu=''
                    src={leftMenu1}
                    alt="Menu Interno Esquerda 1"
                >
                    Resumo da Carteira
                </LeftItem>
                <LeftItem
                    sobMenu=''
                    src={leftMenu2}
                    alt="Menu Interno Esquerda 2"
                >
                    Meus Produtos
                </LeftItem>
                <LeftItem
                    sobMenu=''
                    src={leftMenu3}
                    alt="Menu Interno Esquerda 3"
                >
                    Meus Proventos
                </LeftItem>
                <LeftItem
                    sobMenu=''
                    src={leftMenu4}
                    alt="Menu Interno Esquerda 4"
                >
                    Classe de Ativos
                </LeftItem>
                <LeftItem
                    sobMenu='ativos'
                    src={leftMenu5}
                    alt="Menu Interno Esquerda 5"
                >
                    Rentabilidade Real
                </LeftItem>
                <LeftItem
                    sobMenu=''
                    src={leftMenu6}
                    alt="Menu Interno Esquerda 6"
                >
                    Projeção da Carteira
                </LeftItem>
                <LeftItem
                    sobMenu=''
                    src={leftMenu7}
                    alt="Menu Interno Esquerda 7"
                >
                    Risco x Retorno
                </LeftItem>
                <LeftItem
                    sobMenu=''
                    src={leftMenu8}
                    alt="Menu Interno Esquerda 8"
                >
                    Cobertura do FGC
                </LeftItem>
            </ul>
        </Container>
    )
}