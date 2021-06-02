export function formatMoney(money) {
  const newMoney = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(money);

  return newMoney;
}
