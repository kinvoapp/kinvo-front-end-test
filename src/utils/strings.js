const strings = (language, string) => {
  return {
    'pt-BR': {
      homeTitle: 'Inicio',
      headerGrossBalanceItemTitle: 'Saldo Bruto',
      headerAppliedValueItemTitle: 'Valor Aplicado',
      headerProfitabilityItemTitle: 'Rentabilidade',
      'my-wallet': 'Minha Carteira',
      wallet: 'Carteira',
    },
  }[language][string];
};

export default strings;
