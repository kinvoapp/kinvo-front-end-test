import axios from "axios";

export interface FixedIncomeAPIResponse {
    success: boolean,
    error: string|null,
    data?: {
        snapshotByPortfolio: {
            equity: number,
            valueApplied: number,
            equityProfit: number,
            percentageProfit: number,
            indexerValue: number,
            percentageOverIndexer: number,
        },
        dailyEquityByPortfolioChartData: {
            correctedQuota: number,
            dailyReferenceDate: number,
            movementTypeId: number,
            portfolioProductId: number,
            productName: string,
            value: number
        }[],
        snapshotByProduct: FixedIncomeTitle[]
    }
}

export interface FixedIncomeTitle {
    due: {
        date: string,
        daysUntilExpiration: number
    },
    fixedIncome: {
        bondType: string,
        name: string,
        portfolioProductId: number
    },
    hasBalance: boolean,
    position: {
        equity: number,
        indexerLabel: string,
        indexerValue: number,
        percentageOverIndexer: number,
        portfolioPercentage: number,
        profitability: number,
        valueApplied: number
    },
    productHasQuotation: 1
}

export async function getFixedIncome(): Promise<FixedIncomeAPIResponse> {
    const { data } = await axios.get("https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData");
    return data as FixedIncomeAPIResponse;
}