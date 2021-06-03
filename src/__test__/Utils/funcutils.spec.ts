import { formatMoney, formatPercent } from '../../utils/formatValues'
/* eslint-disable @typescript-eslint/no-empty-function */

describe('tests for form select', () => {
  it('should be return title if options for select', () => {
    expect(formatMoney(1000.0)).toEqual(
      (1000.0 / 100).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    )
  })
  it('should be return title if options for select', () => {
    expect(formatPercent(14.2)).toEqual(`${14.2}%`)
  })
})
