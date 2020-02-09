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

fetch(url)
    .then(response => response.json())
    .then(data => {
       // console.log(data.data.products[0])
        tabela(data)
    })
    .catch(err => console.log(err));

function tabela(data) {
    var cont = document.querySelector("#cont");
    cont.innerHTML = ""
    for (let products in Object.keys(data)) {
        for (var i = 1; i < data.data.products.length; i++) {
            cont.innerHTML += `
        <thead>
        <tr>
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
        <tr id="item">
        <span id="item--tag"> </span>
        <td class="item_name">${data.data.products[i].productName}</td>
        <td>${data.data.products[i].amount}</td>
        <td>${data.data.products[i].averagePrice}</td>
        <td>${data.data.products[i].currentMonthYield}</td>
        <td>${data.data.products[i].equity}</td>
        <td>${data.data.products[i].lastQuotation}</td> 
        <td>${data.data.products[i].lastTwelveMonthsYeld}</td>
        <td>${data.data.products[i].lastTwelveMonthsYeld}</td>
     </tr>`
        }

    }
}


const matchList = document.getElementsByTagName('td');
console.log(matchList)
const search = document.getElementsByName("search");
console.log(search)

const searchStates = async Searchtext => {
    const res = await fetch('https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation');
    const states = await res.json();

    let data = states.filter(state => {
        const regex = new RegExp(`^${data.data.products}`, `gi`);
        return state.name.match(regex) || states.abbr.match(regex);
    });


    if(SearchText.length === 0){
        data.data.products = [];
    } 
    outputHtml(data.data.products);
};


const outputHtml = data => {
    if(data.data.products.length > 0) {
        const html = data.data.products.map(data => `
        <tr id="item">
        <span id="item--tag"> </span>
        <td class="item_name">${data.data.products[i].productName}</td>
        <td>${data.data.products[i].amount}</td>
        <td>${data.data.products[i].averagePrice}</td>
        <td>${data.data.products[i].currentMonthYield}</td>
        <td>${data.data.products[i].equity}</td>
        <td>${data.data.products[i].lastQuotation}</td> 
        <td>${data.data.products[i].lastTwelveMonthsYeld}</td>
        <td>${data.data.products[i].lastTwelveMonthsYeld}</td>
     </tr>`
);
    }
}

