import axios from "axios";
import { useEffect, useState } from "react";
import { HorizontalLine } from "../utils/styles";
import {
    ColunaTabela, DadosTabela, WrapperFiltroBusca,
    WrapperRendasFixas, WrapperTitulo, Tabela
} from "./styles";

function MinhasRendasFixas() {
    const [arrRendasFixas, setArrRendasFixas] = useState([]);
    const [busca, setBusca] = useState("");



    const changeBusca = async (e) => {
        const { value } = e.target;
        setBusca(value);
        const { data: { data: { snapshotByProduct } } } = await axios.get(parseInt(process.env.REACT_APP_PAGINATION));
        const filtro = snapshotByProduct.filter(snapshot => snapshot.fixedIncome.name.toUpperCase().includes(value.toUpperCase()))
        setArrRendasFixas(filtro.slice(0, parseInt(process.env.REACT_APP_PAGINATION))); //exibe somente os 5 iniciais
    }

    const scrollFunc = () => {
        const elTable = document.getElementById("data-table");
        /*significa que temos 0 elementos, temos os 6 elementos totais, ou recebemos da busca menos que 5 elementos.
        Como a busca é de 5 em 5, se tiver menos do que 5, significa dizer que não tem mais dados, se tiver mais que 5
        e esse número não é múltiplo de 5, então chegamos ao final dos dados e dessa forma não buscamos. Aqui ainda há
        falha, no caso de houver busca, e retornar os 5 elementos, o scroll ainda fará uma requisição no servidor*/
        const isMoreData = ((arrRendasFixas.length / parseInt(process.env.REACT_APP_PAGINATION)) * parseInt(process.env.REACT_APP_PAGINATION)) - 
                            arrRendasFixas.length === 0 && arrRendasFixas.length % parseInt(process.env.REACT_APP_PAGINATION) === 0;
        if (elTable.scrollTop === elTable.scrollTopMax && isMoreData) {
            getDados(arrRendasFixas.length);
        }
    }

    const getDados = async (num_total_dados) => {
        const { data: { data: { snapshotByProduct } } } = await axios.get(process.env.REACT_APP_URI);
        if (busca) { //se tem busca, o getDados só é chamado quando tem scroll ou quando a página é criada
            const filtro = snapshotByProduct.filter(snapshot => snapshot.fixedIncome.name.toUpperCase().includes(busca.toUpperCase()))
            const new_data = [...arrRendasFixas, ...filtro.slice(num_total_dados, num_total_dados + parseInt(process.env.REACT_APP_PAGINATION))];
            setArrRendasFixas(new_data);
        } else {
            const new_data = [...arrRendasFixas, ...snapshotByProduct.slice(num_total_dados, num_total_dados + parseInt(process.env.REACT_APP_PAGINATION))];
            setArrRendasFixas(new_data);
        }
    }

    useEffect(() => {
        const elTable = document.getElementById("data-table");
        elTable.addEventListener("scroll", scrollFunc)

        return () => {
            elTable.removeEventListener("scroll", scrollFunc);
        }
    }, [arrRendasFixas])

    useEffect(() => {
        getDados(0);
    }, [])

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
            <Tabela id="data-table">
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
                                            <DadosTabela.SubTitulo.P>{renda.due.date}</DadosTabela.SubTitulo.P>
                                        </DadosTabela.SubTitulo>
                                        <DadosTabela.SubTitulo>
                                            <DadosTabela.SubTitulo.Span>DIAS ATÉ VENC.</DadosTabela.SubTitulo.Span>
                                            <DadosTabela.SubTitulo.P>{renda.due.daysUntilExpiration}</DadosTabela.SubTitulo.P>
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