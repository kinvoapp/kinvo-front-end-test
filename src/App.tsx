import React, { useEffect, useState } from "react";
import api from "./services/api";
import "./App.css";
import Header from "./components/Header";
import SnapshotByProduct from "./models/snapshots";
import {
  Container,
  ContainerFilter,
  HeaderContainer,
  Infos,
  Input,
  Rendas,
  Select,
  Title,
  TitleDiv,
  TitleRendas,
  Div,
  TituloClasse,
  TituloMinhaPosicao,
  Titulo,
  TituloVencimento,
} from "./styles";

function App() {
  const [dados, setDados] = useState<Array<SnapshotByProduct>>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getDados();
  }, []);

  const getDados = async () => {
    try {
      const resp = await api.get("mock/getFixedIncomeClassData");
      setDados(resp.data.data.snapshotByProduct);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <HeaderContainer>
          <Title>Minhas Rendas Fixas</Title>
          <ContainerFilter>
            <Select>
              <option>Ordenar por</option>
              <option>Classe</option>
              <option>Título</option>
              <option>Dias até venc.</option>
            </Select>
            <Input onChange={(e) => setSearch(e.target.value)} />
          </ContainerFilter>
        </HeaderContainer>
        {dados
          .filter((value: SnapshotByProduct) => {
            if (search === "") return value;
            else if (
              value.fixedIncome.name
                .toLowerCase()
                .includes(search.toLowerCase())
            )
              return value;
          })
          .map((dado: SnapshotByProduct) => (
            <Rendas>
              <TitleDiv>
                <TitleRendas>TÍTULO</TitleRendas>
                <Infos>
                  <Titulo>{dado.fixedIncome.name}</Titulo>
                  <Div>
                    <Titulo>CLASSE</Titulo>
                    <TituloClasse>{dado.fixedIncome.bondType}</TituloClasse>
                  </Div>
                </Infos>
              </TitleDiv>
              <TitleDiv>
                <TitleRendas>MINHA POSIÇÃO</TitleRendas>
                <Infos>
                  <Div>
                    <Titulo>VALOR INVES.</Titulo>
                    <TituloMinhaPosicao>
                      {dado.position.valueApplied}
                    </TituloMinhaPosicao>
                  </Div>
                  <Div>
                    <Titulo>SALDO BRUTO</Titulo>
                    <TituloMinhaPosicao>
                      {dado.position.equity}
                    </TituloMinhaPosicao>
                  </Div>
                  <Div>
                    <Titulo>RENT.</Titulo>
                    <TituloMinhaPosicao>
                      {dado.position.profitability}
                    </TituloMinhaPosicao>
                  </Div>
                  <Div>
                    <Titulo>% DA CART.</Titulo>
                    <TituloMinhaPosicao>
                      {dado.position.indexerValue}%
                    </TituloMinhaPosicao>
                  </Div>
                  <Div>
                    <Titulo>CDI</Titulo>
                    <TituloMinhaPosicao>
                      {dado.position.portfolioPercentage}
                    </TituloMinhaPosicao>
                  </Div>
                  <Div>
                    <Titulo>SOBRE CDI</Titulo>
                    <TituloMinhaPosicao>
                      {dado.position.percentageOverIndexer}
                    </TituloMinhaPosicao>
                  </Div>
                </Infos>
              </TitleDiv>
              <TitleDiv>
                <TitleRendas>VENCIMENTO</TitleRendas>
                <Infos>
                  <Div>
                    <Titulo>DATA VENC.</Titulo>
                    <TituloVencimento>{dado.due.date}</TituloVencimento>
                  </Div>
                  <Div>
                    <Titulo>DIAS ATÉ VENC.</Titulo>
                    <TituloVencimento>
                      {dado.due.daysUntilExpiration}
                    </TituloVencimento>
                  </Div>
                </Infos>
              </TitleDiv>
            </Rendas>
          ))}
      </Container>
    </>
  );
}

export default App;
