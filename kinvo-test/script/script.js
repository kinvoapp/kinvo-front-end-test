const tableElement = document.querySelector('tbody');

//unica maneira que consegui fazer o filtro funcionar com elementos gerados dinamicamente
$("#input").keyup(function() {
    let inputVal = $(this).val();

    $("#myTable tr .first").each(function(i) {
    let content = $(this).html();
        if (content.toLowerCase().indexOf(inputVal.toLowerCase()) == -1) {
            $(this.parentNode).hide();
        } else {
            $(this.parentNode).show();
        }
    });
});

//Parte da API
fetch('https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation')
    .then((resp) => resp.json())
    .then((data) => {
        let acoes = data.data.products;
        acoes.forEach(acao => {
            
            //para cada elemento se cria uma nova row
            let tableRow = document.createElement('tr');
            
            //para cada dado dentro do objeto se cria uma nova td
            let nome = document.createElement('td');
            nome.textContent = acao.productName;
            nome.classList.add('first')
            let saldo = document.createElement('td');
            saldo.textContent = 'R$ ' + acao.equity;
            let quantidade = document.createElement('td');
            quantidade.textContent = acao.amount;
            let preco = document.createElement('td');
            preco.textContent = 'R$' + acao.averagePrice;
            let cotacao = document.createElement('td');
            cotacao.textContent ='R$ ' + acao.lastQuotation;
            let yield1m = document.createElement('td');
            yield1m.textContent = acao.currentMonthYield + '%';
            let yield12m = document.createElement('td');
            yield12m.textContent = acao.lastTwelveMonthsYeld + '%';;
            let carteira = document.createElement('td');
            carteira.textContent = acao.lastTwelveMonthsYeld + '%';;

            //colocam-se todos os dados dentro da mesma row
            tableRow.appendChild(nome);  
            tableRow.appendChild(saldo);
            tableRow.appendChild(quantidade);
            tableRow.appendChild(cotacao);
            tableRow.appendChild(preco);
            tableRow.appendChild(yield1m);
            tableRow.appendChild(yield12m);
            tableRow.appendChild(carteira);
            
            //row entra na tabela
            tableElement.appendChild(tableRow);
        });
    });

