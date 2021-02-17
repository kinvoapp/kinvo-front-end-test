> ![Logo Kinvo](https://github.com/cbfranca/kinvo-front-end-test/blob/master/logo.svg)

# Desafio Front-end Web - Kinvo Premium

Oi! Este é o Kinvo Premium, uma aplicação web responsável por representar graficamente dados da API da Kinvo de uma carteira digital. Nesta versão, possuimos apenas dados mocados de renda fixa. 

## Começando?

#### Instale o Node e o NPM

Esse projeto depende do Nodejs e do Node Package Manager (NPM). Antes de continuar você deve baixar e instalar o Node (o download inclui o NPM) de [https://nodejs.com/en/download](https://nodejs.org/en/download/).

#### Instale as dependências do projeto

Esse projeto usa o NPM para gerenciar suas dependências de software. NPM depende do arquivo package.json localizado na raiz deste repositório. Depois de cloná-lo, abra o seu terminar e rode:

```bash
npm install
```

## Como funciona/Arquitetura

O projeto foi contém uma arquitetura autoral que visa flexibilidade e escalabilidade. Seu conteúdo é concentrado em 7 diretórios principais:
  1. assets - contendo imagens, temas, ícones e semelhantes
  2. config - contendo rotas, storage, store e semelhantes
  3. hooks - contendo hooks customizados
  4. services - contendo serviços externos, apis, etc
  5. shared_components - contendo componentes genéricos, como botões, etc
  6. templates - contendo um renderer e pastas com templates (com apenas o main, atualmente)

Alguns estilos genéricos podem ser encontrados dentro de App.css e index.css.

A aplicação renderiza as rotas (App.js -> config/routes), que por sua vez é responsável por renderizar o TemplateRenderer (templates/index). Este verifica se há um template escolhido e, caso não haja, renderiza a página correspondente a rota dentro do template principal (main).

Cada componente que depende de uma estilização extensa possui o seu diretório, contendo seu conteúdo funcional no index.js e seus estilos em styles.js.



## Licenças/Créditos
- Ion-icons
- HighCharts
- Kinvo

