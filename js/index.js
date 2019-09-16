// Armazendo a API em uma variavel
var api_url = 'https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation';

// Marcando tags com a classe dados
var dd = document.querySelectorAll('.dados');



// Marcando table
let tbody = document.querySelector('.table-data>tbody');
let tr = '';

// Pegando dados do objeto summary da api
const g = fetch(api_url)
  .then((res) => res.json())
  .then(json => json.data.summary)

g.then(r => x(Object.values(r)))

// Percorredo o array da classe dados
function x(a) {
  for(let i = 0; i < dd.length; i++) {
    dd[i].innerText = a[i];
  }
}

// Pegando dados do array Products da api
const gdate = fetch(api_url)
  .then((res) => res.json())
  .then(json =>
    json.data.products.forEach((elem) => {
    tr+=`<tr><td>${elem.productName}</td>
    <td><p>SALDO ATUAL</p><h4>R$ ${elem.equity}</h4></td>
    <td><p>QUANT.</p><h4>${elem.amount}</h4></td>
    <td><p>PREÇO MÉDIO</p><h4>R$ ${elem.averagePrice}</h4></td>
    <td><p>ÚLTIMA COTAÇÃO</p><h4>${elem.lastQuotation}</h4></td>
    <td><p>YIELD(1M)</p><h4>${elem.currentMonthYield}%</h4></td>
    <td><p>YIELD(12M)</p><h4>${elem.lastTwelveMonthsYeld}%</h4></td>
    <td><p>%CARTEIRA</p><h4>${elem.lastTwelveMonthsYeld}%</h4></td>
    `
    tbody.innerHTML = tr;
  }));



 // Input de pesquisa
function myFunction(){
  var input = document.getElementById('searchInput');
  var filter = input.value.toUpperCase();
  var table = document.querySelector('.table-data');
  var trElement = table.getElementsByTagName("tr");
  for (i = 0; i < trElement.length; i++) {
    td = trElement[i].getElementsByTagName("td")[0];
    if(td){
      txtValue = td.textContent || td.innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1) {
        trElement[i].style.display = '';
      } else {
        trElement[i].style.display = "none";
      }
    }
  }
}