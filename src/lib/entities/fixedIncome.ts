// Entidades

export type Portfolio = {
	equity: number;
	valueApplied: number;
	equityProfit: number;
	percentageProfit: number;
	indexerValue: number;
	percentageOverIndexer: number;
};

export type Position = {
	valueApplied: Portfolio["valueApplied"];
	equity: Portfolio["equity"];
	// equityProfit
	profitability: Portfolio["percentageProfit"];
	indexerValue: Portfolio["indexerValue"];
	percentageOverIndexer: Portfolio["percentageOverIndexer"];

	indexerLabel: string;

	portfolioPercentage: number;
};

export type Due = {
	date: string;
	daysUntilExpiration: number;
};

export type FixedIncome = {
	bondType: string;
	name: string;
	portfolioProductId: number;
};

export type ProductOrder = "due" | "valueApplied";

export type Product = {
	due: Due;
	fixedIncome: FixedIncome;
	hasBalance: number;
	position: Position;
	productHasQuotation: number;
};

export type DailyEquity = {
	correctedQuota: number;
	dailyReferenceDate: Date;
	movementTypeId: number;
	portfolioProductId: number;
	productName: string;
	value: number;
};

export type SelectionParams = {
	orderBy?: ProductOrder | string;
	searchBy?: string;
	nItens?: number;
	offset?: number;
};
