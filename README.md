<img src="./images/logo.sample.png" alt="Logo of the project" align="right">

# Kinvo &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

> Obrigado pela oportunidade

### Requisitos entregues

- [x] Permitir a filtragem de produtos na seção minhas rendas fixas
- [x] Exibir dados da api referente
- [x] Paginar produtos
- [x] Uso da biblioteca React
- [x] Uso da biblioteca Styled-components
- [x] Permitir ordenação dos itens ( Somente DESC, porem invertendo a ordem fica ASC)
- [x] (Parcialmente) - Arquitetura escalável - Acredito que uma arquitetura baseada na estrutura de store criada através do Redux seja escalável, atribuindo a responsabilidade de tratar dados de forma global exclusivamente a store, porém para considerar toda a arquitetura do sistema escalável acredito que tenha faltado um manipulador de tradução para remover os valores do hardcoded e a melhoria de alguns componentes que só podem ser realizadas com uma visão mais macro do sistema como um todo.

- [x] (Parcialmente) - Cobertura de testes usando jest e enzyme. Criei uma simples estrutura de testagem nas quais testo alguns componentes e consigo também testar o redux com dados mockados. porém a cobertura não atingiu o desejado a pesar de acreditar que passei alguma ideia de como iria escalar os testes

- [x] (Parcialmente, ou não) - Utilizei a biblioteca highcharts para exibir dados da api, todavia não encontrei informações na descrição que me permitissem desenhar um "passo a passo" para exibir os dados da forma correta. No primeiro gráfico criei um algoritmo que calcula com base no valor inserido ( utilizando type 1 para depósito e type 0 para saque ) a multipliação com o que julguei ser a % de valorização da carteira, simulando assim um gráfico de juros compostos, e para comparação fiz um exemplo "Com a kinvo e sem a kinvo", já os outros gráficos fiz com dados mockados

### Prerequisitos

Para rodar esse projeto será necessário configurar a proxy com a url base em "package.json" no objeto proxy: ....

Exemplo

```shell
 "proxy": "https://60b6ad6f17d1dc0017b882fd.mockapi.io",
```

Caso isso não for feito poderá ocorrer erro de permissão (CORS)

## Instalação e começo

Rode o comando abaixo para instalar as dependências

```shell
yarn
```

Rode o comando abaixo para rodar o projeto

```shell
yarn start
```

### Feito com

React
Redux
Jest
TypeScript

## Tests

Para rodar os testes utilize o comando

```shell
yarn test
```

```shell
yarn test --coverage
```

## Licensing

MIT
