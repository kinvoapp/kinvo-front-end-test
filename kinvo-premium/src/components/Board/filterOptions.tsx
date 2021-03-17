import {
  FilterContainer,
  FilterText,
  FilterIcon,
  FilterOpenedContainer,
  FilterOpenedText,
} from './style';
import { useState } from 'react';

const imageSrc = '/images/arrowDownLight.svg';

export default function Filter(props: {
  ordenations: Array<{ name: string; onClick: () => void }>;
}) {
  const [openFilter, setOpenFilter] = useState(false);
  const [textFilter, setTextFilter] = useState('Ordenar por');
  return (
    <FilterContainer>
      <FilterText>{textFilter}</FilterText>
      <FilterIcon
        image={imageSrc}
        onClick={() => setOpenFilter(!openFilter)}
        rotate={openFilter ? '180deg' : '0deg'}
      />
      {openFilter && (
        <FilterOpened
          options={props.ordenations.map((item, indx) => {
            return {
              text: item.name,
              onClick: () => {
                setTextFilter(item.name),
                  setOpenFilter(!openFilter),
                  item.onClick();
              },
              key: indx,
            };
          })}
        />
      )}
    </FilterContainer>
  );
}

const FilterOpened = (props: {
  options: Array<{ text: string; onClick: () => void; }>;
}) => {
  const { options } = props;
  return (
    <FilterOpenedContainer>
      {options.map((item, indx) => (
        <FilterOpenedText key={indx} onClick={item.onClick}>
          {item.text}
        </FilterOpenedText>
      ))}
    </FilterOpenedContainer>
  );
};
