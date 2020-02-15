## Processo Seletivo Técnico Kinvo - Breno Rosas
    -kinvo
    .É um site que te ajuda a ter controle, poder analisar seus investimentos além de ter uma visão geral de sua Carteira, como Resumo, produtos, ações, valor aplicado, risco x retorno etc.

## Installing / Getting started
    Para rodar o projeto é necessário ter instalado o NodeJS + Terminal Git Bash.
    Após aberto o terminal git Bash coloque os seguintes comandos.

    git clone https://github.com/brenorosas/kinvo-front-end-test.git
    git checkout brenorosas
    cd kinvo
    npm install
    npm start

## Ferramentas utilizadas

    JavaScript
    CSS
    HTML
    ReactJS
    Styled-Components
    API: `https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation`

## Testes

    Após aberto o site siga os seguintes passos.
    1- Selecione a opção "Análise por Classe de Produto (Isso irá liberar 4 outras opções no centro da tela).

    2- Tendo as novas opções, selecione a opção "Ações" (Isso irá fazer aparecer a listagem dos produtos/ações junto com uma barra de pesquisa).

    3- Ao digitar qualquer coisa na barra de pesquisa irá acontecer uma filtragem da lista utilizando o que estiver escrito como parâmetro. (Pode escrever tanto letras maiúsculas quanto minúsculas).

## Visualização do código

    Ainda no Git bash no /kinvo (Caso utilize o visual studio code) digite o comando:

    code .

## Estilização

    Foi utilizado styled-components, visível no arquivo styles.js.
    CSS, visível no arquivo App.css

    Obs: Quase toda a estilização obedeceu fielmente as medidas presentes no layout.

## Código

    No App.js tem a chamada para 2 self closes "LogoKinvo" e "ButtonsLeft"
    Que tem os códigos visualizados nas pastas LogoKinvo e ButtonsLeft respectivamente (index.js).

    O LogoKinvo é simplesmente a parte superior da tela com o logo KinvoPremium

    ButtonsLeft são todos os 8 inputs selecionáveis presentes na lateral esquerda do site, qualquer um deles pode ser selecionado, porém apenas o intitulado "Análise por Classe de Produto" irá liberar a nova área do site.
    Ao fim do ButtonsLeft podemos ver outro self close "PageList"

    PageList é a área liberada ao selecionar "Análise por Classe de Produto" e o código é visualizável na pasta "PageList" (index.js).

    Na PageList temos 4 novos inputs Selecionáveis. Qualquer um pode ser selecionado, porém apenas o intitulado "Ações" irá liberar a lista de produtos.

    Ao fim do PageList temos outro self close "ProductList" que é onde está a lista dos produtos + filtragem da mesma.

    Toda a parte inicial da lista é tirada da API:
- `https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation`

    A filtragem da lista acontece na função "onChangeFilter", que filtra uma lista fixa "products" e coloca numa outra listra "filteredProducts", essa por sua vez é apresentada na tela.

    A filtragem utiliza o que estiver escrito na barra de pesquisa como parâmetro utilizando o onChange próprio do JavaScript.