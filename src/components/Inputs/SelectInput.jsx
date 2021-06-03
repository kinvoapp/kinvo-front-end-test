import { FilterSelectContainer } from "./styles";

export function SelectInput({ options, onChange }) {
  return (
    <FilterSelectContainer>
      <select onChange={onChange}>
        <option value="Ordenar por">Ordenar por</option>

        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </FilterSelectContainer>
  );
}
