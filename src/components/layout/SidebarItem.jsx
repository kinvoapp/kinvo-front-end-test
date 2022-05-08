import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import styles from "./SidebarItem.module.css";

import arrow from "../../assets/darkgrayarrow.svg";

const SidebarItem = ({ icon, text, options }) => {
  const [showViews, setShowViews] = useState(false);

  let selected,
    rotadedArrow = "";
  if (showViews) {
    selected = "selected";
    rotadedArrow = "rotadedArrow";
  }

  function toogleView() {
    // controlar o fade in e fade out
    setShowViews(!showViews);
  }

  return (
    <>
      <div
        className={`${styles.containerItem} ${styles[selected]}`}
        onClick={toogleView}
      >
        <div>
          <img src={icon} alt={text} />
          <p>{text}</p>
        </div>
        <img
          className={`${styles.arrow} ${styles[rotadedArrow]}`}
          src={arrow}
          alt={`Abrir ou fechar ${text}`}
        />
      </div>

      {showViews && (
        <>
          {options.map((option) => (
            <div
              className={`${styles.containerItem} ${styles.customHeight}`}
              key={uuidv4()}
            >
              <div>
                <div className={styles.bullet}></div>
                <p>{option}</p>
              </div>
              <img
                className={styles.arrow}
                src={arrow}
                alt={`Abrir ou fechar ${text}`}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SidebarItem;
