> ![Logo Kinvo](https://github.com/cbfranca/kinvo-front-end-test/blob/master/logo.svg)

# Teste para candidatos à vaga de Front-End
	Pagina feita filtrando a listagem dos produtos pelo nome para teste da vaga de estagio.
##  Instalando/iniciando:


1. Baixe o nodeJs;
2. abra o terminal powershell;
3. entre na pasta do projeto;
4. insira o comando npm start

	isso abrirá uma pagina no navegador com o projeto

### Contruido com:
	 - React Library;
	 - CurrencyFormat Library;
	 - Api;
	 - Material de base da kinvo;
	 - HTML;
	 - CSS;
	 - JavaScript;

###Construindo a pagina:
	-instalando nodeJs e visual studio code para começar o projeto;
	-iniciei com o creat-react-app "nome do projeto";
	-após isso no powershell entrei na pasta e abri no visual code com "code ." e em seguida abri o terminal no visual studio code rodando com npm start;
	- Tendo pronto o projeto, apaguei o codigo padrão do App.js e comecei;
	-para a pagina do desafio separei inicialmente o programa em 3 divisões:
		a header para o logo e o topo da pagina, 
		a navBar para a barra do lado esquerdo com os botões,
		e a component para a parte da lista que é ativada pelo botão.
	1.Header
	-comecei com o logo na header separando o espaço para ficar no topo como no layout e usando a imagem do adobe Xd para o logo;

	2.navBar
	-após isso separei o espaço da navBar e criei os botões da navBar com inputs do tipo radio e label's, o input foi escondido via css e a label virou o botão com a imagem o texto e a seta dentro;
	-após ajustar em css para ficar parecidos com os do layout, eu coordenei a ação dos botões com um vetor tendo uma posição para cada botão, e agindo de acordo(mudando o estilo);
	-então mudei o state da navBar para o App.js e passei para a navBar como props para facilitar o uso;
	-para a parte Component só ser mostrada quando o botão de Analise por classe de produto tivesse ativado, eu fiz uma condicional para apenas quando a posição equivalente estivesse ativada o Component fosse mostrado;

	
	3.Component
	- No component teriamos 5 partes:	
		uma com o titulo, para essa apenas o texto com formatação do layout e o background geral do component
		uma com os botões, o mesmo sistema de botões que o usado na navBar mas para mostrar ou esconder a lista
		uma com o summary, para esse separar cinco quadros com um fundo branco com os titulos e as informações pegadas da Api, esta se encontra na classe App e é passada por props
		uma para Fundos e searchBar, aqui temos a searchbar controlada por um state search que é atualizado na mudança e torna possivel a filtragem da lista
		e uma para a lista em sí, onde temos uma classe para o item list alimentado com os dados da api que gera a lista com um map no vetor de produtos da api
## Teste do programa:
	
	Após iniciar o programa nenhum dos botões da navBar estão selecionados, para abrir sessão do layout clique no botão da Análise por Classe de produto e a sessão sera aberta com a aba ações já aberta.
	É possivel abrir as abas Nome de classe que irão esconder a sessão da lista. Na lista temos a barra de pesquisa e podemos filtrar apartir dela as ações por nome em tempo real, tanto pesquisando com letras minusculas quanto maiusculas;



