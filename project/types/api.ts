export type NumberalBoolean = 0 | 1;

export type ProductSnapshot = {
  due: {
    date: string;
    daysUntilExpiration: number;
  };
  fixedIncome: {
    bondType: string;
    name: string;
    portfolioProductId: number;
  };
  hasBalance: NumberalBoolean;
  position: {
    equity: number;
    indexerLabel: string;
    indexerValue: number;
    percentageOverIndexer: number;
    portfolioPercentage: number;
    profitability: number;
    valueApplied: number;
  };
  productHasQuotation: NumberalBoolean;
};

export type EquityByPortfolioChartData = {
  correctedQuota: number;
  dailyReferenceDate: number;
  movementTypeId: number;
  portfolioProductId: number;
  productName: string;
  value: number;
};

export type FixedIncomeResponse = {
  success: true;
  data: {
    snapshotByPortfolio: {
      equity: number;
      valueApplied: number;
      equityProfit: number;
      percentageProfit: number;
      indexerValue: number;
      percentageOverIndexer: number;
    };
    dailyEquityByPortfolioChartData: EquityByPortfolioChartData[];
    snapshotByProduct: ProductSnapshot[];
  };
  error?: null;
};
