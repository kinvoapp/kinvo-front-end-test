import { Select } from './styles';

export default function inputOrdenacao({ orderBy, setOrderBy }) {
  return (
    <Select
      value={orderBy}
      onChange={(e) => setOrderBy(e.target.value)}
    >
      <option value="" disabled hidden>
        Ordernar por
      </option>
      <option value="valueApplied">Valor Investido</option>
      <option value="equity">Saldo Bruto</option>
      <option value="profitability">Rentabilidade</option>
      <option value="portfolioPercentage">% da Carteira</option>
    </Select>
  );

}