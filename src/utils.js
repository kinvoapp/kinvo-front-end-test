export function formatCoin(number) {
  if(typeof number == 'number')
    return number.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  return number;
}