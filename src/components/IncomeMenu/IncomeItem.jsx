import { Item, ItemCallout } from "./styles";

export function IncomeItem({ title, value }) {
  return (
    <Item>
      <ItemCallout>
        <span>{title}</span>
        <strong>{value}</strong>
      </ItemCallout>
    </Item>
  );
}
