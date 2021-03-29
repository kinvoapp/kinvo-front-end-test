import { useEffect } from "react";
import { DadosColoridos, TituloDeDados } from "../utils/styles";
import { LinhaVertical, SectionValoresTotais, WrapperBlocoDado } from "./styles";

function ValoresTotaisCabecalho({ objValoresTotais }) {
    const {
        equity,
        valueApplied,
        equityProfit,
        percentageProfit,
        indexerValue,
        percentageOverIndexer
    } = objValoresTotais || {
        equity: 0,
        valueApplied: 0,
        equityProfit: 0,
        percentageProfit: 0,
        indexerValue: 0,
        percentageOverIndexer: 0,
    };
    return (
        <SectionValoresTotais>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>SALDO BRUTO</TituloDeDados>
                    <DadosColoridos color="roxo">{equity.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>VALOR APLICADO</TituloDeDados>
                    <DadosColoridos color="roxo">{valueApplied.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>RESULTADO</TituloDeDados>
                    <DadosColoridos color="roxo">{equityProfit.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>RENTABILIDADE</TituloDeDados>
                    <DadosColoridos color="roxo">{percentageProfit.toLocaleString("pt-BR")}%</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>CDI</TituloDeDados>
                    <DadosColoridos color="roxo">{indexerValue.toLocaleString("pt-BR")}%</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
            <WrapperBlocoDado>
                <LinhaVertical />
                <WrapperBlocoDado.TituloValor>
                    <TituloDeDados>% SOBRE CDI</TituloDeDados>
                    <DadosColoridos color="roxo">{percentageOverIndexer.toLocaleString("pt-BR")}%</DadosColoridos>
                </WrapperBlocoDado.TituloValor>
            </WrapperBlocoDado>
        </SectionValoresTotais>
    )
}

export default ValoresTotaisCabecalho;