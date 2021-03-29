export interface Product {
  due: {
    date: string;
    daysUntilExpiration: number;
  };
  fixedIncome: {
    bondType: string;
    name: string;
    portfolioProductId: number;
  };
  hasBalance: number;
  position: {
    equity: number;
    indexerLabel: string;
    indexerValue: number;
    percentageOverIndexer: number;
    portfolioPercentage: number;
    profitability: number;
    valueApplied: number;
  };
  productHasQuotation: number;
}
