import { v4 as uuidv4 } from "uuid";

import styles from "./Select.module.css";

const Select = ({ sortBy }) => {
  const options = [
    "Ordenar por",
    "Dias para venc.",
    "Maior rent. - Menor rent",
    "Maior valor inves. - Menor valor inves.",
  ];

  return (
    <select className={styles.select} onChange={(e) => sortBy(e.target.value)}>
      {options.length > 0 &&
        options.map((option) => <option key={uuidv4()}>{option}</option>)}
    </select>
  );
};

export default Select;
