const url = 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData'

/* FORMAT CARDS VALUES */

const formCurrency = new Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
})

const formPercent = new Intl.NumberFormat('pt-Br', {
  style: 'percent',
  minimumFractionDigits: 2
})

const formPercentInt = new Intl.NumberFormat('pt-Br', {
  style: 'percent',
})

/*  GLOBAL VARIABLES  */

const equityField = document.getElementById('equity')
const valueAppliedField = document.getElementById('value-aplied')
const equityProfitField = document.getElementById('equity-profit')
const percentageProfitField = document.getElementById('percent-profit')
const indexerValueField = document.getElementById('indexer-value')
const percentageOverIndexerField = document.getElementById('over-indexer')

/* FUNCTION GET DATA FROM API */

async function getDataApi (){
  const api = await fetch (url)
  const data = await api.json()
  
  const equity = data.data.snapshotByPortfolio.equity
  const valueApplied = data.data.snapshotByPortfolio.valueApplied
  const equityProfit = data.data.snapshotByPortfolio.equityProfit
  const percentageProfit = data.data.snapshotByPortfolio.percentageProfit / 100
  const indexerValue = data.data.snapshotByPortfolio.indexerValue / 100
  const percentageOverIndexer = data.data.snapshotByPortfolio.percentageOverIndexer / 100
  
  /* INSERT DATAS IN HTML */
  
  equityField.innerHTML = formCurrency.format(equity)
  valueAppliedField.innerHTML = formCurrency.format(valueApplied)
  equityProfitField.innerHTML = formCurrency.format(equityProfit)
  percentageProfitField.innerHTML = formPercent.format(percentageProfit)
  indexerValueField.innerHTML = formPercent.format(indexerValue)
  percentageOverIndexerField.innerHTML = formPercentInt.format(percentageOverIndexer)
  
  return data.data.snapshotByProduct
}

/* GET THE SNAPSHOTDATAS */

function render(data) {
  let output = ""

  const order = document.querySelector('#order')

  order.addEventListener('change', () => {

    if (order.value == "a-z") {
      data.sort(function (a, b) { return a.fixedIncome.name > b.fixedIncome.name ? 1 : -1; })
    }
    if (order.value == "z-a"){
      data.sort(function (a, b) { return a.fixedIncome.name < b.fixedIncome.name ? 1 : -1; })
    }
  })  
  
  data.forEach((element) => {
    
    const dateParse = JSON.stringify(element.due.date)
    const daysUntlParse = JSON.stringify(element.due.daysUntilExpiration)
    const bondTypeParse = JSON.stringify(element.fixedIncome.bondType)
    const fidNameParse = JSON.stringify(element.fixedIncome.name)
    const equityParse = JSON.stringify(element.position.equity)
    const indexerParse = JSON.stringify(element.position.indexerLabel)
    const indexerValueParse = JSON.stringify(element.position.indexerValue)
    const percent0verParse = JSON.stringify(element.position.percentageOverIndexer)
    const portfolioPercentParse = JSON.stringify(element.position.portfolioPercentage) / 100
    const profParse = JSON.stringify(element.position.profitability) / 100
    const valueAplParse = JSON.stringify(element.position.valueApplied)
    const productIdParse = JSON.stringify(element.fixedIncome.portfolioProductId)
    // const prodHaQstParse = JSON.stringify(element.position.productHasQuotation)
    // const hasBalanceParse = JSON.stringify(element.hasBalance)

    /* INSERT HMTL */

    output += `
  <div class="fid-card" id="${productIdParse}">
    <div class="fid-card1">
      <div class="fid-title">
        <h5>título</h5>
        <img src="img/info-title.svg" alt="">
      </div>
      <div class="fid-info">
        <p id="title-card">${fidNameParse.replace(/"/g, '')}</p>
        <div>
          <p>classe</p>
          <h5>${bondTypeParse.replace(/"/g, '')}</h5>
        </div>
      </div>
    </div>

    <div class="fid-card2">
      <div class="fid-title">
        <h5>resultado</h5>
      </div>
      <div class="fid-info">
        <div>
          <p>Valor inves.</p>
          <h4>${formCurrency.format(valueAplParse).replace('R$', "")}</h4>
        </div>
        <div>
          <p>saldo bruto</p>
          <h4>${formCurrency.format(equityParse).replace('R$', "")}</h4>
        </div>
        <div>
          <p>rent</p>
          <h4>${formPercent.format(profParse)}</h4>
        </div>
        <div>
          <p>% da cart.</p>
          <h4>${formPercent.format(portfolioPercentParse)}</h4>
        </div>
        <div>
          <p>${indexerParse.replace(/"/g, '')}</p>
          <h4>${indexerValueParse}</h4>
        </div>
        <div>
          <p>sobre cdi</p>
          <h4>${percent0verParse}</h4>
        </div>
      </div>
    </div>

    <div class="fid-card3">
      <div class="fid-title">
        <h5>vencimento</h5>
        <img src="img/info-title.svg" alt="">
      </div>
      <div class="fid-info">
        <div>
          <p>data venc</p>
          <h4>${dateParse.replace(/"/g, '')}</h4>
        </div>
        <div>
          <p>dias até venc</p>
          <h4>${daysUntlParse}</h4>
        </div>
      </div>
    </div>
  </div>`
  })
  
  document.querySelector('.fid-content').innerHTML = output
}

/*  FILTER BY SEARCH  */

let snapshotData
(async () => {
  snapshotData = await getDataApi()
  render(snapshotData)
})()

function filter(search) {
  if (snapshotData) {
    render(snapshotData.filter(item => item.fixedIncome.name.toUpperCase().includes(String(search).toUpperCase())))
  }
}