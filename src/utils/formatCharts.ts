/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DataChartSpline } from './schemas'

export const formatValuesChartExample = (
  dailyEquityByPortfolioChartData: any
) => {
  let lastData = 0
  let lastD = 0
  const pseudo = dailyEquityByPortfolioChartData.map((val: any) => {
    const valWithoutRent =
      val.movementTypeId === 1 ? val.value + lastD : lastD - val.value
    const valWithRent =
      val.movementTypeId === 1
        ? (val.correctedQuota / 100) * (val.value + lastData)
        : (val.correctedQuota / 100) * (lastData - val.value)
    lastData = valWithRent
    lastD = valWithoutRent
    return {
      daily: val.dailyReferenceDate,
      value: valWithRent,
      valueWithOutRent: valWithoutRent
    } as DataChartSpline
  })
  return pseudo
}
