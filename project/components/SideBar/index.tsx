import React from 'react'
import { Container, List } from './styles'
import ListItem from './ListItem';

import resumoCarteiraIcon from "../../assets/icons/resumo-carteira.svg"
import meusProdutosIcon from "../../assets/icons/meus-produtos.svg"
import meusProventosIcon from "../../assets/icons/meus-proventos.svg"
import classeDeAtivosIcon from "../../assets/icons/classe-de-ativos.svg"
import rentabilidadeRealIcon from "../../assets/icons/rentabilidade-real.svg"
import riscoRetornoIcon from "../../assets/icons/risco-retorno.svg"
import projecaoDaCarteiraIcon from "../../assets/icons/projecao-da-carteira.svg"
import coberturaDoFgcIcon from "../../assets/icons/cobertura-do-fgc.svg"


export default function SideBar() {
    return (
        <Container>
            <List>
                <ListItem iconUrl={resumoCarteiraIcon}>
                    Resumo <br />
                    Da Carteira
                </ListItem>
                <ListItem iconUrl={meusProdutosIcon}>
                    Meus <br />
                    Produtos
                </ListItem>
                <ListItem iconUrl={meusProventosIcon}>
                    Meus <br />
                    Proventos
                </ListItem>
                <ListItem isActive={true} iconUrl={classeDeAtivosIcon} subItems={[
                    { label: "Ação", url: "/" },
                    { label: "Fundo", url: "/" },
                    { label: "Fundo Imobiliário", url: "/" },
                    { label: "Fundo Renda Fixa", url: "/" },
                ]} >
                    Classe <br />
                    De Ativos
                </ListItem>
                <ListItem iconUrl={rentabilidadeRealIcon}>
                    Rentabilidade <br />
                    Real
                </ListItem>
                <ListItem iconUrl={projecaoDaCarteiraIcon}>
                    Projeção <br />
                    da Carteira
                </ListItem>
                <ListItem iconUrl={riscoRetornoIcon}>
                    Risco x<br />
                    Retorno
                </ListItem>
                <ListItem iconUrl={coberturaDoFgcIcon}>
                    Cobertura<br />
                    do FGC
                </ListItem>
            </List>
        </Container>
    )
}
