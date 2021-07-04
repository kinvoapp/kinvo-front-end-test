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