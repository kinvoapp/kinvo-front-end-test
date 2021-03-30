import { 
    Award, ArrowUp, TrendingUp, ChevronDown, Menu
} from "react-feather";
import { MyButtonIcon } from "../utils/styles";
import { WrapperHeader, NomeEmpresa, DadosHeader } from "./styles";

function Header(props) {
    return (
        <WrapperHeader>
            <NomeEmpresa>
                <NomeEmpresa.H1Kinvo>Kinvo</NomeEmpresa.H1Kinvo>
                <h1>premium</h1>
            </NomeEmpresa>
            <DadosHeader>
                <DadosHeader.WrapperIconDados>
                    <MyButtonIcon colorBackground="#DAE0E3">
                        <Award color="#fff"/>
                    </MyButtonIcon>
                    <DadosHeader.Dados>
                        <DadosHeader.Dados.Titulo>
                            Saldo Bruto
                        </DadosHeader.Dados.Titulo>
                        <DadosHeader.Dados.Valor>
                            {130521230.02.toLocaleString('pt-BR')}
                        </DadosHeader.Dados.Valor>
                    </DadosHeader.Dados>
                </DadosHeader.WrapperIconDados>
                <DadosHeader.WrapperIconDados>
                    <MyButtonIcon colorBackground="#DAE0E3">
                        <ArrowUp color="#fff"/>
                    </MyButtonIcon>
                    <DadosHeader.Dados>
                        <DadosHeader.Dados.Titulo>
                            Saldo Brutoo
                        </DadosHeader.Dados.Titulo>
                        <DadosHeader.Dados.Valor>
                            {130521230.02.toLocaleString('pt-BR')}
                        </DadosHeader.Dados.Valor>
                    </DadosHeader.Dados>
                </DadosHeader.WrapperIconDados>
                <DadosHeader.WrapperIconDados>
                    <MyButtonIcon colorBackground="#DAE0E3">
                        <TrendingUp color="#fff"/>
                    </MyButtonIcon>
                    <DadosHeader.Dados>
                        <DadosHeader.Dados.Titulo>
                            Saldo Brutooo
                        </DadosHeader.Dados.Titulo>
                        <DadosHeader.Dados.Valor>
                            {130521230.02.toLocaleString('pt-BR')}
                        </DadosHeader.Dados.Valor>
                    </DadosHeader.Dados>
                </DadosHeader.WrapperIconDados>
                <DadosHeader.WrapperIconDados>
                    <MyButtonIcon colorBackground="#4C309B">
                        <ChevronDown color="#fff"/>
                    </MyButtonIcon>
                    <DadosHeader.Dados>
                        <DadosHeader.Dados.Titulo>
                            Carteira
                        </DadosHeader.Dados.Titulo>
                        <DadosHeader.Dados.Valor>
                            Minha carteira
                        </DadosHeader.Dados.Valor>
                    </DadosHeader.Dados>
                </DadosHeader.WrapperIconDados>
                <DadosHeader.WrapperIconDados menuLogado>
                    <MyButtonIcon colorBackground="#4C309B">
                        <Menu color="#fff"/>
                    </MyButtonIcon>
                </DadosHeader.WrapperIconDados>
            </DadosHeader>
        </WrapperHeader>
    )
}

export default Header;