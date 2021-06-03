import { FilterInputContainer } from "./styles";

export function Input({ icon, value, onChange }) {
  return (
    <FilterInputContainer>
      <img src={icon} alt="search-icon" />
      <input type="text" value={value} onChange={onChange} />
    </FilterInputContainer>
  );
}
