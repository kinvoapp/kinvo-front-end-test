export type BondType = 'Renda Fixa Pré' | 'Renda Fixa Pós' | 'Tesouro Direto';

export type IndexerLabel = 'CDI';

export interface SnapshotByProduct {
  due: {
    date: string;
    daysUntilExpiration: number;
  };
  fixedIncome: {
    bondType: BondType;
    name: string;
    portfolioProductId: number;
  };
  hasBalance: number;
  position: {
    equity: number;
    indexerLabel: IndexerLabel;
    indexerValue: number;
    percentageOverIndexer: number;
    portfolioPercentage: number;
    profitability: number;
    valueApplied: number;
  };
  productHasQuotation: number;
}
