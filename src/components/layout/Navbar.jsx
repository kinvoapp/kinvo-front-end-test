import WalletInfo from "./WalletInfo";
import HamburguerMenu from "./HamburguerMenu";

import logo from "../../logo.svg";
import medal from "../../assets/medal.svg";
import linechart from "../../assets/lineChart.svg";
import uparrow from "../../assets/upArrow.svg";
import walleticon from "../../assets/mywalleticon.svg";

import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="logo" />
      <div>
        <WalletInfo
          icon={medal}
          text={"Saldo bruto"}
          number={"130.521.230,02"}
        />
        <WalletInfo
          icon={uparrow}
          text={"valor aplicado"}
          number={"521.230,02"}
        />
        <WalletInfo icon={linechart} text={"Rentabilidade"} number={"2,34%"} />

        <WalletInfo
          icon={walleticon}
          text={"carteira"}
          textBold={"textBold"}
          number={"Minha Carteira"}
        />

        <HamburguerMenu />
      </div>
    </div>
  );
};

export default Navbar;
