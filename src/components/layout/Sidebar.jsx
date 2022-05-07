import SidebarItem from "./SidebarItem";

import puzzle from "../../assets/puzzle.svg";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.containerSidebar}>
      <SidebarItem icon={puzzle} text={"Resumo da Carteira"} />
      <SidebarItem icon={puzzle} text={"Meus Produtos"} />
      <SidebarItem icon={puzzle} text={"Meus Proventos"} />
      <SidebarItem icon={puzzle} text={"Classe de Ativos"} />
    </div>
  );
};

export default Sidebar;
