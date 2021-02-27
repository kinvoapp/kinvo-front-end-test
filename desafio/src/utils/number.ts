export function parseCurrency(value: number): string {
  const valueFormarted = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return valueFormarted;
}

export function parsePercentage(value: number): string {
  const percentage = value.toLocaleString('pt-BR');

  return `${percentage}%`;
}
