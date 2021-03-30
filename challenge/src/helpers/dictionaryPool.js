import getCurency from 'helpers/getCurrency';

export const fixedIncomeDictionary = {
  date: {
    title: 'Data Venc.',
    value: (date) => date.replace(/\//g, '.'),
  },
  daysUntilExpiration: {
    title: 'Dias até Venc.',
    value: (value) => parseInt(value),
  },
  bondType: {
    title: 'Classe',
    value: (value) => value.toString(),
  },
  equity: {
    title: 'Saldo Bruto',
    value: (value) => new Intl.NumberFormat('pt-BR').format(value),
  },
  portfolioPercentage: {
    title: '% da Cart.',
    value: (value) => `${value}%`,
  },
  indexerValue: {
    title: 'CDI',
    value: (value) => `${value}%`,
  },
  percentageOverIndexer: {
    title: '% Sobre Cdi',
    value: (value) => `${value}%`,
  },
  profitability: {
    title: 'Rent',
    value: (value) => `${value}%`,
  },
  valueApplied: {
    title: 'Valor Inves.',
    value: (value) => new Intl.NumberFormat('pt-BR').format(value),
  },
};

export const titleDictionary = {
  equity: {
    title: 'Saldo Bruto',
    value: getCurency('BRL'),
  },
  equityProfit: {
    title: 'Resultado',
    value: getCurency('BRL'),
  },
  indexerValue: {
    title: 'CDI',
    value: (value) => `${value}%`,
  },
  percentageOverIndexer: {
    title: '% Sobre Cdi',
    value: (value) => `${value}%`,
  },
  percentageProfit: {
    title: 'Rentabilidade',
    value: (value) => `${value}%`,
  },
  valueApplied: {
    title: 'Valor Aplicado',
    value: getCurency('BRL'),
  },
};
