export interface DailyEquityByPortfolioChartDataProps {
  value: number
  productName: string
  correctedQuota: number
  movementTypeId: number
  portfolioProductId: number
  dailyReferenceDate: number
}

export interface SnapshotByProductProps {
  due: {
    date: string
    daysUntilExpiration: number
  }
  fixedIncome: {
    bondType: string
    name: string
    portfolioProductId: number
  }
  hasBalance: number
  position: {
    equity: number
    indexerLabel: string
    indexerValue: number
    percentageOverIndexer: number
    portfolioPercentage: number
    profitability: number
    valueApplied: number
  }
  productHasQuotation: number
}

export interface SnapshotByPortfolioProps {
  equity: number
  valueApplied: number
  equityProfit: number
  percentageProfit: number
  indexerValue: number
  percentageOverIndexer: number
}

export interface FilteredApiData {
  filteredSnapshotByProduct: SnapshotByProductProps[] | []
  orderedSnapshotByProduct:  SnapshotByProductProps[] | []
}
export interface ApiData extends FilteredApiData {
  snapshotByPortfolio: SnapshotByPortfolioProps
  snapshotByProduct: Array<SnapshotByProductProps>
  dailyEquityByPortfolioChartData: Array<DailyEquityByPortfolioChartDataProps>

}


