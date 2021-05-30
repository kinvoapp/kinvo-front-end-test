import { ItemContainer } from "./styles";

export function HeaderItem({ icon, title, value }) {
  return (
    <ItemContainer>
      <img src={icon} alt={title} />
      <div>
        <span>{title}</span>
        <strong>{value}</strong>
      </div>
    </ItemContainer>
  );
}
