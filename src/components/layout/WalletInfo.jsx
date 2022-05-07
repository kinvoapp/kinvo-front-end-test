import styles from "./WalletInfo.module.css";

const WalletInfo = ({ icon, text, number, textBold }) => {
  return (
    <div className={styles.walletInfoContainer}>
      <img src={icon} />
      <div>
        <div className={`${styles.text} ${styles[textBold]}`}>{text}</div>
        <div className={styles.number}>{number}</div>
      </div>
    </div>
  );
};

export default WalletInfo;
