import {
	Portfolio,
	DailyEquity,
	Product,
	SelectionParams,
} from "../entities/fixedIncome";

export interface ResponseError {
	error: any;
}

export interface FixedIncomeService {
	snapshotByPortfolio: Portfolio;
	dailyEquityByPortfolioChartData: DailyEquity[];
	snapshotByProduct: Product[];
}

export interface FilterParams extends SelectionParams {}
