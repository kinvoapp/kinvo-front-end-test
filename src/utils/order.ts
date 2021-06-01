/* eslint-disable array-callback-return */
export const OrderUtil = (orderOption: any, filteredProducts: any): [] => {
  return filteredProducts.sort((val1: any, val2: any) => {
    switch (orderOption) {
      case 'name':
        return val1.fixedIncome.name > val2.fixedIncome.name ? 1 : -1

      case 'bondType':
        return val1.fixedIncome.bondType > val2.fixedIncome.bondType ? 1 : -1

      case 'valueApplied':
        return val1.position.valueApplied - val2.position.valueApplied

      case 'equity':
        return val1.position.equity - val2.position.equity

      case 'profitability':
        return val1.position.profitability - val2.position.profitability

      case 'portfolioPercentage':
        return (
          val1.position.portfolioPercentage - val2.position.portfolioPercentage
        )

      case 'indexerValue':
        return val1.position.indexerValue - val2.position.indexerValue

      case 'percentageOverIndexer':
        return (
          val1.position.percentageOverIndexer -
          val2.position.percentageOverIndexer
        )
      case 'date':
        return val1.due.date - val2.due.date

      case 'daysUntilExpiration':
        return val1.due.daysUntilExpiration - val2.due.daysUntilExpiration

      default:
        break
    }
  })
}
