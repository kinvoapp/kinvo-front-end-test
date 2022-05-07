import styles from "./SidebarItem.module.css";

import arrow from "../../assets/darkgrayarrow.svg";

const SidebarItem = ({ icon, text }) => {
  return (
    <div className={styles.containerItem}>
      <div>
        <img src={icon} alt={text} />
        <p>{text}</p>
      </div>
      <img
        className={styles.arrow}
        src={arrow}
        alt={`Abrir ou fechar ${text}`}
      />
    </div>
  );
};

export default SidebarItem;
