import { useState } from "react";
import { HorizontalLine } from "../utils/styles";
import {
    ColunaTabela, DadosTabela, WrapperFiltroBusca,
    WrapperRendasFixas, WrapperTitulo, Tabela
} from "./styles";
import { arr_dados } from "./utils";

function MinhasRendasFixas() {
    const [arrRendasFixas, setArrRendasFixas] = useState(arr_dados);
    const [busca, setBusca] = useState("");

    const changeBusca = e => {
        setBusca(e.target.value);
    }

    return (
        <WrapperRendasFixas>
            <WrapperRendasFixas.Header>
                <h2>Minhas Rendas fixas</h2>
                <WrapperFiltroBusca>
                    <WrapperFiltroBusca.Select name="select-ordenacao" id="ordenacao">
                        <option value="titulo">Titulo</option>
                        <option value="vencimento">Vencimento</option>
                    </WrapperFiltroBusca.Select>
                    <WrapperFiltroBusca.Input value={busca} onChange={changeBusca} type="text" placeholder='Faça uma busca...' />
                </WrapperFiltroBusca>
            </WrapperRendasFixas.Header>
            <HorizontalLine />
            <Tabela>
                <tbody>
                    {arrRendasFixas.map((renda, index) => (
                        <tr key={index}>
                            <td>
                                <ColunaTabela>
                                    <WrapperTitulo>
                                        <WrapperTitulo.Titulo>TÍTULO</WrapperTitulo.Titulo>
                                    </WrapperTitulo>
                                    <DadosTabela>
                                        <DadosTabela.SubTitulo>
                                            <DadosTabela.SubTitulo.P width color={false}>{renda.fixedIncome.name}</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                        <DadosTabela.SubTitulo>
                                            <DadosTabela.SubTitulo.Span>CLASSE</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P color="roxo">{renda.fixedIncome.bondType}</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                    </DadosTabela>
                                </ColunaTabela>
                            </td>
                            <td>
                                <ColunaTabela>
                                    <WrapperTitulo>
                                        <WrapperTitulo.Titulo>MINHA POSIÇÃO</WrapperTitulo.Titulo>
                                    </WrapperTitulo>
                                    <DadosTabela>
                                        <DadosTabela.SubTitulo minhaPosicao>
                                            <DadosTabela.SubTitulo.Span>VALOR INVEST.</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P color="verde">{renda.position.valueApplied.toLocaleString("pt-BR")}</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                        <DadosTabela.SubTitulo minhaPosicao>
                                            <DadosTabela.SubTitulo.Span>SALDO BRUTO.</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P color="verde">{renda.position.equity.toLocaleString("pt-BR")}</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                        <DadosTabela.SubTitulo minhaPosicao>
                                            <DadosTabela.SubTitulo.Span>RENT.</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P color="verde">{renda.position.profitability.toLocaleString("pt-BR")}</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                        <DadosTabela.SubTitulo minhaPosicao>
                                            <DadosTabela.SubTitulo.Span>% DA CART.</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P color="verde">{renda.position.portfolioPercentage.toLocaleString("pt-BR")}</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                        <DadosTabela.SubTitulo minhaPosicao>
                                            <DadosTabela.SubTitulo.Span>CDI</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P color="verde">{renda.position.indexerValue.toLocaleString("pt-BR")}</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                        <DadosTabela.SubTitulo minhaPosicao>
                                            <DadosTabela.SubTitulo.Span>SOBRE CDI</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P color="verde">{renda.position.percentageOverIndexer.toLocaleString("pt-BR")}</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                    </DadosTabela>
                                </ColunaTabela>
                            </td>
                            <td>
                                <ColunaTabela>
                                    <WrapperTitulo>
                                        <WrapperTitulo.Titulo>VENCIMENTO</WrapperTitulo.Titulo>
                                    </WrapperTitulo>
                                    <DadosTabela>
                                        <DadosTabela.SubTitulo minhaPosicao>
                                            <DadosTabela.SubTitulo.Span>DATA VENC.</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P>15.05.2019</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                        <DadosTabela.SubTitulo>
                                            <DadosTabela.SubTitulo.Span>DIAS ATÉ VENC.</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P>5762</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                    </DadosTabela>
                                </ColunaTabela>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Tabela>
        </WrapperRendasFixas>
    )
}

export default MinhasRendasFixas;