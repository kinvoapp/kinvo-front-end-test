import { FixedIncomeService } from "../../useCases/service";

export function adaptFixedIncomeResponse(inputData: Data): FixedIncomeService {
	const { dailyEquityByPortfolioChartData: originalChartDate, ...intactData } =
		inputData;

	const adaptedChartData: FixedIncomeService["dailyEquityByPortfolioChartData"] =
		originalChartDate.map(({ dailyReferenceDate, ...rest }) => {
			return { ...rest, dailyReferenceDate: new Date(dailyReferenceDate) };
		});

	return {
		dailyEquityByPortfolioChartData: adaptedChartData,
		...intactData,
	};
}

export interface FixedIncomeResponse {
	success: boolean;
	data: Data;
	error: any | null;
}

export interface Data {
	snapshotByPortfolio: SnapshotByPortfolio;
	dailyEquityByPortfolioChartData: DailyEquityByPortfolioChartDaum[];
	snapshotByProduct: SnapshotByProduct[];
}

export interface SnapshotByPortfolio {
	equity: number;
	valueApplied: number;
	equityProfit: number;
	percentageProfit: number;
	indexerValue: number;
	percentageOverIndexer: number;
}

export interface DailyEquityByPortfolioChartDaum {
	correctedQuota: number;
	dailyReferenceDate: number;
	movementTypeId: number;
	portfolioProductId: number;
	productName: string;
	value: number;
}

export interface SnapshotByProduct {
	due: Due;
	fixedIncome: FixedIncome;
	hasBalance: number;
	position: Position;
	productHasQuotation: number;
}

export interface Due {
	date: string;
	daysUntilExpiration: number;
}

export interface FixedIncome {
	bondType: string;
	name: string;
	portfolioProductId: number;
}

export interface Position {
	equity: number;
	indexerLabel: string;
	indexerValue: number;
	percentageOverIndexer: number;
	portfolioPercentage: number;
	profitability: number;
	valueApplied: number;
}
