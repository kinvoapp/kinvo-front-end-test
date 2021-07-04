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
}

getDataApi()
