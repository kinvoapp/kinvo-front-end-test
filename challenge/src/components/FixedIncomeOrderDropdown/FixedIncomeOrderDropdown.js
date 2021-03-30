import * as S from 'components/styled/lib';
import { ReactComponent as SvgArrow } from 'assets/images/arrow.svg';
import { fixedIncomeDictionary } from 'helpers/dictionaryPool';
import { useEffect, useState } from 'react';

function normalizeDate(date) {
  const isolatedParts = date.split('/');
  return new Date(isolatedParts[2], isolatedParts[1] - 1, isolatedParts[0]);
}

function orderBySelectedValue(rowA, rowB, selectedValue) {
  const valueA =
    (rowA.due[selectedValue] &&
      (selectedValue === 'date'
        ? normalizeDate(rowA.due[selectedValue])
        : rowA.due[selectedValue])) ||
    rowA.fixedIncome[selectedValue] ||
    rowA.position[selectedValue];
  const valueB =
    (rowB.due[selectedValue] &&
      (selectedValue === 'date'
        ? normalizeDate(rowB.due[selectedValue])
        : rowB.due[selectedValue])) ||
    rowB.fixedIncome[selectedValue] ||
    rowB.position[selectedValue];

  if (valueA > valueB) return 1;
  if (valueA < valueB) return -1;
  return 0;
}

const FixedIncomeOrderDropdown = ({ setFilteredRows }) => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    setFilteredRows((prevState) => {
      const ordered = [...prevState];
      ordered.sort((rowA, rowB) => orderBySelectedValue(rowA, rowB, selectedValue)).reverse();
      return ordered;
    });
  }, [selectedValue, setFilteredRows]);

  return (
    <S.OrderDropdownWrapper>
      <S.OrderDropdown
        as="select"
        value={selectedValue}
        onChange={({ target }) => setSelectedValue(target.value)}
      >
        <option value="" disabled>
          Ordernar por
        </option>
        {Object.entries(fixedIncomeDictionary).map((opt) => {
          return (
            <option key={opt[0]} value={opt[0]}>
              {opt[1].title}
            </option>
          );
        })}
      </S.OrderDropdown>
      <SvgArrow />
    </S.OrderDropdownWrapper>
  );
};

export default FixedIncomeOrderDropdown;
