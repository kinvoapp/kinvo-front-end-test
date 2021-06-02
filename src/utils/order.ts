/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable array-callback-return */
export const OrderUtil = (orderOption: any, filteredProducts: any): [] => {
  return filteredProducts.sort((val1: any, val2: any) => {
    switch (orderOption) {
      case 'name':
        return val2.fixedIncome.name > val1.fixedIncome.name ? 1 : -1

      case 'bondType':
        return val2.fixedIncome.bondType > val1.fixedIncome.bondType ? 1 : -1

      case 'valueApplied':
        return val2.position.valueApplied - val1.position.valueApplied

      case 'equity':
        return val2.position.equity - val1.position.equity

      case 'profitability':
        return val2.position.profitability - val1.position.profitability

      case 'portfolioPercentage':
        return (
          val2.position.portfolioPercentage - val1.position.portfolioPercentage
        )

      case 'indexerValue':
        return val2.position.indexerValue - val1.position.indexerValue

      case 'percentageOverIndexer':
        return (
          val2.position.percentageOverIndexer -
          val2.position.percentageOverIndexer
        )
      case 'date':
        return val2.due.date - val1.due.date

      case 'daysUntilExpiration':
        return val2.due.daysUntilExpiration - val1.due.daysUntilExpiration

      default:
        break
    }
  })
}
