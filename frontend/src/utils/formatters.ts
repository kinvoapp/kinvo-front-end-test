/**
 * This function returns a number as a currency
 */
export const formatToCurrency = (value: number): string => {
  const v = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value);
  return v;
};
