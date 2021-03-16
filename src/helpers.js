export function formatedDate(date) {
  return date.replace(/\//g, ".");
}

export function formatedNumber(number) {
  return number.toLocaleString("pt-br", { minimumFractionDigits: 2 });
}
