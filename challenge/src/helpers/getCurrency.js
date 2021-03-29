const getCurency = (currency) => (value) => {
  const newValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency,
  }).format(value);

  return newValue;
};

export default getCurency;
