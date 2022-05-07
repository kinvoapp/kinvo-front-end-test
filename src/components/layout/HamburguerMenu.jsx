import hamburguermenu from "../../assets/hamburguermenu.svg";

import styles from "./HamburguerMenu.module.css";

const HamburguerMenu = () => {
  return (
    <div className={styles.containerMenu}>
      <img
        src={hamburguermenu}
        alt={"Clique para abrir ou fechar o menu lateral"}
      />
    </div>
  );
};

export default HamburguerMenu;
