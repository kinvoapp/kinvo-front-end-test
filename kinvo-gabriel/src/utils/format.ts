import numeral from 'numeral'

export const formatToRealStr = (amount: number) => {
  const valueToFormat = numeral(amount)

  return `R$ ${valueToFormat.format('0,0.00')}`
}
