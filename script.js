//REQUISICAO A API
const url = fetch(
  "https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation"
)
  .then(response => {
    //SE STATUS MAL SUCEDIDO, O ERRO E CAPTURADO E TRATADO
    //SE BEM SUCEDIDO OS DADOS SÃO RECEBIDOS

    if (!response.ok)
      throw new Error(`Erro ao fazer a requisição: status ${response.status}`);
    return response.json();
  })
  .then(data => {
    //VALORES DO SUMARIO
    const summary = () => {
      const saldoBruto = document.querySelector("#saldo-valor");
      saldoBruto.innerHTML = `R$ ${data.data.summary.grossBalance}`;
      const valorSaldo = (document.querySelector(
        "#saldo-valor"
      ).innerHTML = saldoBruto.innerHTML.replace(".", ","));

      const valorAplicado = document.querySelector("#valor-aplicado");
      valorAplicado.innerHTML = `R$ ${data.data.summary.appliedValue}`;
      const valorAplic = (document.querySelector(
        "#valor-aplicado"
      ).innerHTML = valorAplicado.innerHTML.replace(".", ","));

      const ganhoDeCapital = document.querySelector("#ganho-capital");
      ganhoDeCapital.innerHTML = `R$ ${data.data.summary.capitalGains}`;
      const ganhoDeCap = (document.querySelector(
        "#ganho-capital"
      ).innerHTML = ganhoDeCapital.innerHTML.replace(".", ","));

      const totalDistribuidos = document.querySelector("#total-distribuidos");
      totalDistribuidos.innerHTML = `R$ ${data.data.summary.earnings}`;
      const totalDist = (document.querySelector(
        "#total-distribuidos"
      ).innerHTML = totalDistribuidos.innerHTML.replace(".", ","));

      const PercentYield = document.querySelector("#percent-yield");
      PercentYield.innerHTML = `${data.data.summary.yield}%`;
    };

    //INVOCANDO A FUNCAO SUMMARY PARA TRAZER VALORES DO SUMARIO
    summary();

    //VALORES DA TABELA
    const tableRows = () => {
      const table = document.querySelector("#show-data");
      const produtos = data.data.products;
      for (let index = 0; index < produtos.length; index++) {
        const rowTable = `
                <td class="nome-produto">${data.data.products[index].productName}</td>
                <td><p>SALDO ATUAL</p>R$ ${data.data.products[index].equity}</td>
                <td><p>QUANTI.</p>R$ ${data.data.products[index].amount}</td>
                <td><p>PREÇO MÉDIO</p>R$ ${data.data.products[index].averagePrice}</td>
                <td><p>ÚLTIMA COTAÇÃO</p>R$ ${data.data.products[index].lastQuotation}</td>
                <td><p>YIELD(1M)</p>${data.data.products[index].currentMonthYield}%</td>
                <td><p>YIELD(1M)</p>${data.data.products[index].lastTwelveMonthsYeld}%</td>
                <td><p>% CARTEIRA</p>${data.data.products[index].lastTwelveMonthsYeld}%</td>
            `;
        const valorLinha = rowTable.replace(".", ",");

        //CRIANDO ELEMENTO <TR> DINAMICAMENTE PARA REDEBER OS DADOS DA API
        const newTr = document.createElement("tr");
        table.appendChild(newTr);

        newTr.innerHTML = valorLinha;

        //CRIANDO ELEMENTO <TD> DINAMICAMENTE PARA REDEBER OS DADOS DA API
        const newTd = document.createElement("td");
        newTr.appendChild(newTd);
      }
    };
    //INVOCANDO A FUNCAO TABLEROWS PARA TRAZER VALORES DO PRODUTO
    tableRows();

    const search = () => {
      const inputSearch = document.querySelector('input[type="search"]');
      inputSearch.value;
      inputSearch.addEventListener("keyup", () => {
        if (inputSearch.value === "") {
          window.location.href = location;
        }
        const produtosLista = data.data.products;
        for (let index = 0; index < produtosLista.length; index++) {
          const element = produtosLista[index];
          const prod = element.productName;
          const find = inputSearch.value.toUpperCase() === prod ? true : false;
          if (find) {
            const rowfind = document.querySelectorAll("tr");
            rowfind.forEach(e => {
              if (e.includes === inputSearch.value) {
                e.classList.add("display-block");
              } else {
                e.classList.add("display-none");
                const findValue = `
                <td class="nome-produto">${data.data.products[index].productName}</td>
                <td><p>SALDO ATUAL</p>R$ ${data.data.products[index].equity}</td>
                <td><p>QUANTI.</p>R$ ${data.data.products[index].amount}</td>
                <td><p>PREÇO MÉDIO</p>R$ ${data.data.products[index].averagePrice}</td>
                <td><p>ÚLTIMA COTAÇÃO</p>R$ ${data.data.products[index].lastQuotation}</td>
                <td><p>YIELD(1M)</p>${data.data.products[index].currentMonthYield}%</td>
                <td><p>YIELD(1M)</p>${data.data.products[index].lastTwelveMonthsYeld}%</td>
                <td><p>% CARTEIRA</p>${data.data.products[index].lastTwelveMonthsYeld}%</td>
                `;
                const table = document.querySelector("#show-data");
                table.innerHTML = findValue;
              }
            });
          }
        }
      });
    };
    //INVOCANDO A FUNCAO DE BUSCA
    search();
  })
  .catch(error => {
    console.error(error.message);
  });
