import { FilterInputContainer } from "./styles";

export function Input({ icon }) {
  return (
    <FilterInputContainer>
      <img src={icon} alt="search-icon" />
      <input type="text" />
    </FilterInputContainer>
  );
}
