import { Context, useContext, createContext } from "react";

import { FixedIncomeAPIResponse } from "../data/fixed_income";

const FixedIncomeContext: Context<FixedIncomeAPIResponse|null> = createContext(null as FixedIncomeAPIResponse|null);
const FixedIncomeProvider = FixedIncomeContext.Provider;

export {
    FixedIncomeContext,
    FixedIncomeProvider
}

export function useFixedIncome() {
    return useContext(FixedIncomeContext);
}