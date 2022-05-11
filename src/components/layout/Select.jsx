import { v4 as uuidv4 } from "uuid";

import styles from "./Select.module.css";

const Select = ({ options }) => {
  return (
    <select className={styles.select} name="" id="">
      {options.length > 0 &&
        options.map((option) => <option key={uuidv4()}>{option}</option>)}
    </select>
  );
};

export default Select;
