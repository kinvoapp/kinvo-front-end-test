interface Config {
  currency?: string;
  style?: string;
}

const defaultConfig: Config = {
  currency: 'BRL',
  style: 'currency',
};

export const currencyFormatter = (value: number = 0, config: Config = defaultConfig) => {
  const { currency, style } = config;
  const currentValue = !Number(value) ? 0 : value;
  return new Intl.NumberFormat('pt-BR', {
    style,
    currency,
  }).format(currentValue / 100);
};

export const currencyFormatterDebitCredit = (value: number, debitCredit: 'C' | 'D') => {
  if (debitCredit === 'D') {
    return currencyFormatter(value * -1);
  }
  return currencyFormatter(value);
};

export const currencyFormatterWithoutPrefix = value => currencyFormatter(value).replace(/(\s|R\$)/g, '');

export const currencyNumberToCents = (value: number) => Math.round(value * 100);

export const currencyNumberIntegerToCents = (value: number) => value / 100;

export const numberFormatter = value => {
  const currentValue = !Number(value) ? 0 : value;
  return new Intl.NumberFormat('pt-BR').format(currentValue);
};
