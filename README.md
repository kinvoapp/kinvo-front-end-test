<img src="./logo.png" alt="Logo do projeto" align="right">
<img src="./logo.svg" alt="Logo do projeto" align="right">

# Projeto: Meus investimentos

Um projeto para testar os meus conhecimentos sobre React, com um página estática, e um menu não funcional, com efeito visual.
Na aplicação é exibida um cabeçalho com alguns valores com informações sobre os investimentos, e uma tabela, exibindo as aplicações
de renda fixa, podendo pesquisar e ordenar os dados.

## Instalando / Iniciando o projeto

Uma pequena introdução mínima para configurar o projeto e executá-lo.

``` git clone https://github.com/tarfao/kinvo-front-end-test.git
    cd kinvo-front-end-test
    npm install 
    npm start
```

## Desenvolvimento

### Bibliotecas
> React 17.0.2
> axios 0.21.1
> React Father 2.0.9
> styled-components 5.2.1

## Requisitos completos e observações
* > Filtragem de produtos na seção **Minhas Rendas Fixas**;
* > Exibição de dados via API `https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData`;
* > Paginação infinita de 5 produtos por página.;
* > Uso do React;
* > Uso da Bibliotece styled-components;
* > Ordenação pelo nome e vencimento do produto.;
* > Gráfico - Não consegui encontrar uma maneira de exibir o gráfico de linha com os dados, pois há muitos produtos que possuem variações no mesmo dia, e outros produtos que só possuem variação em dias completamente diferentes, além de que não estão distribuídos igualmente, para fazer uma comparação no gráfico.;
