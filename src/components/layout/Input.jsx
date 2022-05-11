import { useRef } from "react";

import search from "../../assets/search.svg";

import styles from "./Input.module.css";

const Input = () => {
  const inputEl = useRef(null);

  function focusInput() {
    inputEl.current.focus();
  }

  return (
    <div className={styles.containerinput} onClick={focusInput}>
      <img src={search} alt="Digite no input para filtrar sua busca" />
      <input ref={inputEl} className={styles.input} type="text" />
    </div>
  );
};

export default Input;
