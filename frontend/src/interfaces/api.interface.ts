export const emptyPortfolio: SnapshotByPortfolio = {
  equity: 0,
  valueApplied: 0,
  equityProfit: 0,
  percentageProfit: 0,
  indexerValue: 0,
  percentageOverIndexer: 0
};

export const emptyProductsData: SnapshotByProduct = {
  due: {
    date: '',
    daysUntilExpiration: 0
  },
  fixedIncome: {
    bondType: '',
    name: '',
    portfolioProductId: 0
  },
  position: {
    equity: 0,
    indexerLabel: '',
    indexerValue: 0,
    percentageOverIndexer: 0,
    portfolioPercentage: 0,
    profitability: 0,
    valueApplied: 0
  }
};
export interface SnapshotByPortfolio {
  equity: number;
  valueApplied: number;
  equityProfit: number;
  percentageProfit: number;
  indexerValue: number;
  percentageOverIndexer: number;
}

export interface DailyEquityByPortfolioChartData {
  correctedQuota: number;
  dailyReferenceDate: number;
  movementTypeId: number;
  portfolioProductId: number;
  productName: string;
  value: number;
}

export interface SnapshotByProduct {
  due: {
    date: string;
    daysUntilExpiration: number;
  };
  fixedIncome: {
    bondType: string;
    name: string;
    portfolioProductId: number;
  };
  position: {
    equity: number;
    indexerLabel: string;
    indexerValue: number;
    percentageOverIndexer: number;
    portfolioPercentage: number;
    profitability: number;
    valueApplied: number;
  };
  hasBalance?: number;
  productHasCotation?: number;
}

export interface DueSnapshotByProduct {
  due: {
    date: string;
    daysUntilExpiration: number;
  };
}

export interface FixedIncomeByProduct {
  fixedIncome: {
    bondType: string;
    name: string;
    portfolioProductId: number;
  };
}

export interface ProductPosition {
  position: {
    equity: number;
    indexerLabel: string;
    indexerValue: number;
    percentageOverIndexer: number;
    portfolioPercentage: number;
    profitability: number;
    valueApplied: number;
  };
}
