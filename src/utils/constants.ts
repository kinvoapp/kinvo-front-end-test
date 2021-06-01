export interface ProductOrder {
  name: string
  value: string
}

export const productOrders: ProductOrder[] = [
  { name: 'Nome', value: 'name' },
  { name: 'Classe', value: 'bondType' },
  { name: 'Valor Investido', value: 'valueApplied' },
  { name: 'Saldo Bruto', value: 'equity' },
  { name: 'Rentabilidade', value: 'profitability' },
  { name: '% da Carteira', value: 'portfolioPercentage' },
  { name: 'CDI', value: 'indexerValue' },
  { name: 'Sobre CDI', value: 'percentageOverIndexer' },
  { name: 'Data de Vencimento', value: 'date' },
  { name: 'Dias para Vencimento', value: 'daysUntilExpiration' }
]
