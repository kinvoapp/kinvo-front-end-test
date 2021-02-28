interface ParseCurrencyOptions {
  symbol?: boolean;
}

export function parseCurrency(
  value: number,
  options?: ParseCurrencyOptions
): string {
  const { symbol = true } = options || {};

  const valueFormarted = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  if (!symbol) return valueFormarted.replace('R$', '').trim();

  return valueFormarted;
}

interface ParsePercentageOptions {
  symbol?: boolean;
}

export function parsePercentage(
  value: number,
  options?: ParsePercentageOptions
): string {
  const { symbol = true } = options || {};

  const percentage = value.toLocaleString('pt-BR');

  if (!symbol) return String(percentage);

  return `${percentage}%`;
}
