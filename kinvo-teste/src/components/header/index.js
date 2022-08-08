import { Container } from "./styles";
import LogoKinvo from "../../styles/SVGs/LogoKinvo";
import LogoPremium from "../../styles/SVGs/LogoPremium";
import SaldoBruto from "../../styles/SVGs/SaldoBruto";
import ValorAplicado from "../../styles/SVGs/ValorAplicado";
import Rentabilidade from "../../styles/SVGs/Rentabilidade";
import MinhaCarteira from "../../styles/SVGs/MinhaCarteira";
import Menu from "../../styles/SVGs/Menu";

export default function Header() {
    return (
        <Container>
            <div className="div-header">
                <div className="div-logo">
                    <LogoKinvo />
                    <LogoPremium />
                </div>
                <div className="header-items">
                    <div className="header-item">
                        <SaldoBruto />
                        <div>
                            <h6>Saldo Bruto</h6>
                            <p>130.521.230,02</p>
                        </div>
                    </div>
                    <div className="header-item">
                        <ValorAplicado />
                        <div>
                            <h6>Valor Aplicado</h6>
                            <p>521.230,02</p>
                        </div>
                    </div>
                    <div className="header-item">
                        <Rentabilidade />
                        <div>
                            <h6>Rentabilidade</h6>
                            <p>2,34%</p>
                        </div>
                    </div>
                    <div className="minha-carteira">
                        <MinhaCarteira />
                        <div className="header-item" style={{marginLeft: '0px'}}>
                            <div>
                                <h6>Carteira</h6>
                                <p>Minha Carteira</p>
                            </div>
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>
        </Container>
    )
}