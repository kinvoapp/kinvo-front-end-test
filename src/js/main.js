const api = {
    getData: async () => {
        const resposta = await fetch('https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation');

        const json = await resposta.json();

        return json.data;
    }
}

api.getData().then(r => {
    const produtos = r.products;
    popularTabs(r.summary);
    for(i = 0; i < produtos.length; i++){
        console.log(produtos[i]);
        productTable(produtos[i]);
    };
});


function popularTabs(sumario) {
    Object.keys(sumario).forEach(s => {
        document.getElementById(s).innerHTML = sumario[s].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
    });
    document.getElementById('yield').innerHTML = sumario.yield+'%';
}

function productTable(tablevalues){
    var tablevalues = tablevalues;
    var table = document.getElementById("tablepd");
    table.innerHTML += (`<tr>
    <td>${tablevalues.productName}</td>
    <td>${tablevalues.equity.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    <td>${tablevalues.amount}</td>
    <td>${tablevalues.averagePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    <td>${tablevalues.lastQuotation.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    <td>${tablevalues.currentMonthYield}</td>
    <td>${tablevalues.lastTwelveMonthsYeld}</td>
    <td>${tablevalues.lastTwelveMonthsYeld}</td>
</tr>`);
}