export type snapshotPortfolioType = {
    equity: number;
    valueApplied: number;
    equityProfit: number;
    percentageProfit: number;
    indexerValue: number;
    percentageOverIndexer: number;
}
export type dueType = {
    date: string;
    daysUntilExpiration: number;
}
export type fixedIncomeType = {
    bondType: string;
    name: string;
    portfolioProductId: number;
}
export type positionType = {
    equity: number;
    indexerLabel: string;
    indexerValue: number;
    percentageOverIndexer: number;
    portfolioPercentage: number;
    profitability: number;
    valueApplied: number;
}

type snapshotProductType = {
    due: dueType;
    fixedIncome: fixedIncomeType;
    hasBalance: number;
    position: positionType;
    productHasQuotation: number;
}

export interface IResponseData {
    snapshotByPortfolio: snapshotPortfolioType;
    snapshotByProduct: snapshotProductType[]
}