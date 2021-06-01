/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum LocalTypes {
  TOGGLE_MY_FIX = '@Localactive/TOGGLE_MY_FIX'
}

export interface LocalSearch {}
/**
 * Data types
 */
export interface Local {
  data: LocalSearch
}

/**
 * State type
 */
export interface LocalState {
  data: {
    sucess: boolean
    data: {
      snapshotByPortfolio: {
        equity: number
        valueApplied: number
        equityProfit: number
        percentageProfit: number
        indexerValue: number
        percentageOverIndexer: number
      }
      dailyEquityByPortfolioCharData: []
      snapshotByProduct: []
    }
    error: string
  }
}
