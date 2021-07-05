const sortCategories = {
  due: ['date', 'daysUntilExpiration'],
  fixedIncome: ['bondType', 'name'],
  position: [
    'equity',
    'indexerLabel',
    'indexerValue',
    'percentageOverIndexer',
    'portfolioPercentage',
    'profitability',
    'valueApplied',
  ],
};

export default sortCategories;
