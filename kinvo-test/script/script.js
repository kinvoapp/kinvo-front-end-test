const tableElement = document.querySelector('tbody');

$("#searchInput").keyup(function() {
    let val = $(this).val();

    $("#searchTable tr .first").each(function(i) {
    let content = $(this).html();
        if (content.toLowerCase().indexOf(val.toLowerCase()) == -1) {
            $(this.parentNode).hide();
        } else {
            $(this.parentNode).show();
        }
    });
});

fetch('https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation')
    .then((resp) => resp.json())
    .then((data) => {
        let acoes = data.data.products;
        console.log(acoes);
        acoes.forEach(acao => {
            console.log(acao)
            let tableRow = document.createElement('tr');

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


            tableRow.appendChild(nome);  
            tableRow.appendChild(saldo);
            tableRow.appendChild(quantidade);
            tableRow.appendChild(cotacao);
            tableRow.appendChild(preco);
            tableRow.appendChild(yield1m);
            tableRow.appendChild(yield12m);
            tableRow.appendChild(carteira);
    
            tableElement.appendChild(tableRow);
        });
    });

