import {formatNumber} from './formatters'

test('formats number for brazilian format', () => 
    expect(formatNumber(10.45)).toBe("10,45")
)