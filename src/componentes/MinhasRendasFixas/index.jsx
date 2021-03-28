import { HorizontalLine } from "../utils/styles";
import { ColunaTabela, DadosTabela, WrapperFiltroBusca, WrapperRendasFixas, WrapperTitulo } from "./styles";

function MinhasRendasFixas() {
    return (
        <WrapperRendasFixas>
            <WrapperRendasFixas.Header>
                <h2>Minhas Rendas fixas</h2>
                <WrapperFiltroBusca>
                    <WrapperFiltroBusca.Select name="select-ordenacao" id="ordenacao">
                        <option value="titulo">Titulo</option>
                        <option value="vencimento">Vencimento</option>
                    </WrapperFiltroBusca.Select>
                    <WrapperFiltroBusca.Input type="text" placeholder='Faça uma busca...' />
                </WrapperFiltroBusca>
            </WrapperRendasFixas.Header>
            <HorizontalLine />
            <table>
                <tr>
                    <td>
                        <ColunaTabela>
                            <WrapperTitulo>
                                <WrapperTitulo.Titulo>TÍTULO</WrapperTitulo.Titulo>
                            </WrapperTitulo>
                            <DadosTabela>
                                <DadosTabela.SubTitulo>
                                    <DadosTabela.SubTitulo.P width color={false}>Tesouro IPCA + com juros semestrais 2020 (ntnb)</DadosTabela.SubTitulo.P>
                                </DadosTabela.SubTitulo>
                                <DadosTabela.SubTitulo>
                                    <DadosTabela.SubTitulo.Span>CLASSE</DadosTabela.SubTitulo.Span>
                                    <DadosTabela.SubTitulo.P color="roxo">Tesouro Direto</DadosTabela.SubTitulo.P>
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
                                    <DadosTabela.SubTitulo.P color="verde">1003</DadosTabela.SubTitulo.P>
                                </DadosTabela.SubTitulo>
                                <DadosTabela.SubTitulo minhaPosicao>
                                    <DadosTabela.SubTitulo.Span>SALDO BRUTO.</DadosTabela.SubTitulo.Span>
                                    <DadosTabela.SubTitulo.P color="verde">1124</DadosTabela.SubTitulo.P>
                                </DadosTabela.SubTitulo>
                                <DadosTabela.SubTitulo minhaPosicao>
                                    <DadosTabela.SubTitulo.Span>RENT.</DadosTabela.SubTitulo.Span>
                                    <DadosTabela.SubTitulo.P color="verde">48.55</DadosTabela.SubTitulo.P>
                                </DadosTabela.SubTitulo>
                                <DadosTabela.SubTitulo minhaPosicao>
                                    <DadosTabela.SubTitulo.Span>% DA CART.</DadosTabela.SubTitulo.Span>
                                    <DadosTabela.SubTitulo.P color="verde">5.33</DadosTabela.SubTitulo.P>
                                </DadosTabela.SubTitulo>
                                <DadosTabela.SubTitulo minhaPosicao>
                                    <DadosTabela.SubTitulo.Span>CDI</DadosTabela.SubTitulo.Span>
                                    <DadosTabela.SubTitulo.P color="verde">1.24</DadosTabela.SubTitulo.P>
                                </DadosTabela.SubTitulo>
                                <DadosTabela.SubTitulo minhaPosicao>
                                    <DadosTabela.SubTitulo.Span>SOBRE CDI</DadosTabela.SubTitulo.Span>
                                    <DadosTabela.SubTitulo.P color="verde">118</DadosTabela.SubTitulo.P>
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

            </table>
        </WrapperRendasFixas>
    )
}

export default MinhasRendasFixas;