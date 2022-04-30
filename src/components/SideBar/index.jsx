import { SideBarComponent } from "./SideBarComponent"
import { Container } from "./styles"
import { ReactComponent as Wallet } from "../../assets/wallet.svg"
import { ReactComponent as Products } from "../../assets/products.svg"
import { ReactComponent as Earnings } from "../../assets/earnings.svg"
import { ReactComponent as Actives } from "../../assets/actives.svg"
import { ReactComponent as Profitability } from "../../assets/profitability.svg"
import { ReactComponent as Projection } from "../../assets/projection.svg"
import { ReactComponent as Risk } from "../../assets/risk.svg"
import { ReactComponent as Padlock } from "../../assets/padlock.svg"



export function SideBar() {
    // Seção da classe de ativos selecionada já que é a página atual
    return(
        <Container>
            <SideBarComponent name="Resumo Da Carteira" Icon={Wallet} options={templateOptions} actualPage={false}/>
            <SideBarComponent name="Meus Produtos" Icon={Products} options={templateOptions} actualPage={false}/>
            <SideBarComponent name="Meus Proventos" Icon={Earnings} options={templateOptions} actualPage={false}/>
            <SideBarComponent name="Classe de Ativos" Icon={Actives} options={[
                {link: "#",value: "Ação"},
                {link: "#",value: "Fundo"},
                {link: "#",value: "Fundo Imobiliário"},
                {link: "#",value: "Fundo Renda Fixa"},                
            ]} actualPage={true}/>
            <SideBarComponent name="Rentabilidade Real" Icon={Profitability} options={templateOptions} actualPage={false}/>
            <SideBarComponent name="Projeção de Carteira" Icon={Projection} options={templateOptions} actualPage={false}/>
            <SideBarComponent name="Risco x Retorno" Icon={Risk} options={templateOptions} actualPage={false}/>
            <SideBarComponent name="Cobertura do FGC" Icon={Padlock} options={templateOptions} actualPage={false}/>
        </Container>
    )
}

const templateOptions = [
    {link: "#",value: "Opção 1"},
    {link: "#",value: "Opção 2"},
    {link: "#",value: "Opção 3"},
    {link: "#",value: "Opção 4"},

]