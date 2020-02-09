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


const url = 'https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation';

fetch(url).then(response => response.json())
.then(data => {
        console.log(data.data.products[0])
        tabela(data)
    })
    .catch(err => console.log(err));

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
        <div id="item--tag"> </div>
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


  function searchByName() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    tr = document.getElementsByTagName("tbody");
    th = document.getElementsByTagName("thead");
    span = document.getElementById("item--tag");
    console.log(span)
    console.log(tr);
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          th[i].style.display = "";
          span.style.display = "";
        } else {
          tr[i].style.display = "none";
          th[i].style.display = "none";
          span.style.display = "none";
        }
      }
    }
  }