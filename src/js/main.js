const api = {
    getData: async () => {
        const resposta = await fetch('https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation');

        const json = await resposta.json();

        return json.data;
    }
}

api.getData().then(r => {
    const produtos = r.products;
    console.log(produtos[0])
    popularTabs(r.summary);
    for(i = 0; i < produtos.length; i++){
        productTable(produtos[i]);
    };
});


function popularTabs(sumario) {
    Object.keys(sumario).forEach(s => {
        document.getElementById(s).innerHTML = sumario[s].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
    });
    document.getElementById('yield').innerHTML = sumario.yield+' %';
}

function productTable(tablevalues){
    var tablevalues = tablevalues;
    var table = document.getElementById("tablepd");
    table.innerHTML += (`
    <table>
        <tr>
            <td>${tablevalues.productName}</td>
            <td><div class="table-organiz">SALDO ATUAL</div><div>${tablevalues.equity.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div></td>
            <td><div class="table-organiz">QUANT.</div><div>${tablevalues.amount}</div></td>
            <td><div class="table-organiz">PREÇO MÉDIO</div>${tablevalues.averagePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td><div class="table-organiz">ULTIMA COTAÇÃO</div>${tablevalues.lastQuotation.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td><div class="table-organiz">YIELD</div>${tablevalues.currentMonthYield} %</td>
            <td><div class="table-organiz">YIELD</div>${tablevalues.lastTwelveMonthsYeld} %</td>
            <td><div class="table-organiz">YIELD</div>${tablevalues.lastTwelveMonthsYeld} %</td>
        </tr>
    </table>
    <div class="linha"></div>
`);
}

