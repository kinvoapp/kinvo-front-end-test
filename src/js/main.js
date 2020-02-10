/* const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        }

        if (xhr.status == 404) {
            console.log('File or resource not found');
        }
    }
}; 
xhr.open('get', 'https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation', true);
xhr.send();
*/


// Call API 

const url = 'https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation';

fetch(url).then(response => response.json())
.then(data => {
        console.log(data.data.summary)
        tabela(data)
        summary(data)
    })
    .catch(err => console.log(err));


    //dados da API exibidos no HTML
function tabela(data) {
    var cont = document.querySelector("#cont");
    cont.innerHTML = ""
    for (let products in Object.keys(data)) {
        for (let i = 1; i < data.data.products.length; i++) {
            cont.innerHTML += `
        <table id="table">    
        <thead>
        <tr class="tr_table">
        <th></th>
        <th>saldo atual</th>
        <th>quant.</th>
        <th>preço médio</th>
        <th>ultima cotação</th>
        <th>yield (1m)</th>
        <th>yield (12m)</th>
        <th>% carteira</th>
        </tr>
        </thead> 
        <tr class="tr_table" id="item">
        <div class="tag" id="item--tag"> </div>
        <td class="item_name">${data.data.products[i].productName}</td>
        <td>${data.data.products[i].amount}</td>
        <td>${data.data.products[i].averagePrice}</td>
        <td>${data.data.products[i].currentMonthYield}</td>
        <td>${data.data.products[i].equity}</td>
        <td>${data.data.products[i].lastQuotation}</td> 
        <td>${data.data.products[i].lastTwelveMonthsYeld}</td>
        <td>${data.data.products[i].lastTwelveMonthsYeld}</td>
     </tr>
     </table>`
        }

    }
}

//dados do sumário 
function summary(data){
  var item = document.getElementById("summary");
  console.log(item);
  item.innerHTML = ""
  for (let summary in Object.keys(data)) {
    item.innerHTML = `
    <ul class="databuttons">
    <li class="databuttons__button"><a>saldo bruto<br><span>${data.data.summary.grossBalance}</span></a></li>
    <li class="databuttons__button"><a>valor aplicado<br><span>${data.data.summary.appliedValue}</span></a></li>
    <li class="databuttons__button"><a>ganho de capital<br><span>${data.data.summary.capitalGains}</span></a></li>
    <li class="databuttons__button"><a>total distribuído<br><span>${data.data.summary.earnings}</span></a></li>
    <li class="databuttons__button"><a>yield<br><span>${data.data.summary.yield}</span></a></li>
    <ul>
    `
  }
}

//pesquisar por nome
  function searchByName() {
    let input, filter, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    tr = document.getElementsByTagName("tbody");
    th = document.getElementsByTagName("thead");
    span = document.getElementsByClassName("tag");
    console.log(span)
    console.log(tr);
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          th[i].style.display = "";
          span[i].style.display = "";
        } else {
          span[i].style.display = "none";
          tr[i].style.display = "none";
          th[i].style.display = "none";
        }
      }
    }
  }