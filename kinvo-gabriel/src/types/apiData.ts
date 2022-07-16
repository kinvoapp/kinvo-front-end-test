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
    date: Date
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

export interface ApiData {
  snapshotByPortfolio: SnapshotByPortfolioProps
  snapshotByProduct: Array<SnapshotByProductProps>
  dailyEquityByPortfolioChartData: Array<DailyEquityByPortfolioChartDataProps>
}
