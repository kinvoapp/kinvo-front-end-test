import { Container, Content } from "./styles";
import logo from '../../assets/logo.svg'
import saldobruto from '../../assets/iconsaldobruto.svg'
import valoraplicado from '../../assets/iconvaloraplicado.svg'
import rentabilidade from '../../assets/iconrentabilidade.svg'
import minhacarteira from '../../assets/iconminhacarteira.svg'
import hamburguer from '../../assets/iconhamburguer.svg'

export function Header(){
    return(
        <Container>
            <Content>                         
                <img src={ logo } alt="logo" />               

                <div className="infoHeader">
                    <div className="itemHeader">
                        <img src={ saldobruto } alt="saldobruto" />
                        <span>
                            <header>SALDO BRUTO</header>
                            <strong>130.521.230,02</strong>
                        </span>
                    </div>
                    <div className="itemHeader">
                        <img src={ valoraplicado } alt="valoraplicado" />
                        <span>
                            <header>VALOR APLICADO</header>
                            <strong>521.230,02</strong>
                        </span>
                    </div>
                    <div className="itemHeader">
                        <img src={ rentabilidade } alt="rentabilidade" />
                        <span>
                            <header>RENTABILIDADE</header>
                            <strong>2,34%</strong>
                        </span>
                    </div>
                    <div className="itemMenu">
                        <img src={ minhacarteira } alt="minhacarteira" />
                        <span>
                            <header>CARTEIRA</header>
                            <strong>Minha Carteira</strong>
                        </span>
                    </div>
                    <div className="itemMenu">
                        <img src={ hamburguer } alt="hamburguer" />
                    </div>
                    
                </div>

            </Content>         
        </Container>
    )
}