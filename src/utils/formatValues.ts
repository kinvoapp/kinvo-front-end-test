/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const formatMoney = (value: number) => {
  const newValue = value / 100
  return newValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

export const formatPercent = (value: number) => {
  return `${value}%`
}
