import { DadosColoridos, TituloDeDados } from "../utils/styles";
import { LinhaVertical, SectionValoresTotais, WrapperBlocoDado } from "./styles";

function ValoresTotaisCabecalho() {
    return (
        <SectionValoresTotais>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>SALDO BRUTO</TituloDeDados>
                    <DadosColoridos color="roxo">{207653.10.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL'})}</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>VALOR APLICADO</TituloDeDados>
                    <DadosColoridos color="roxo">{207653.10.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL'})}</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>RESULTADO</TituloDeDados>
                    <DadosColoridos color="roxo">{207653.10.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL'})}</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>RENTABILIDADE</TituloDeDados>
                    <DadosColoridos color="roxo">{207653.10.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL'})}</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>CDI</TituloDeDados>
                    <DadosColoridos color="roxo">{207653.10.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL'})}</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>% SOBRE CDI</TituloDeDados>
                    <DadosColoridos color="roxo">{207653.10.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL'})}</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
        </SectionValoresTotais>
    )
}

export default ValoresTotaisCabecalho;