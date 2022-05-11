import styles from "./FixedIncomeTitle.module.css";

const FixedIncomeTitle = ({ bondType, name, infoicon }) => {
  return (
    <div className={styles.containerfixedincometitle}>
      <div className={styles.containertitle}>
        <h5 className={styles.title}>Título </h5>
        <img src={infoicon} alt="" />
      </div>
      <div className={styles.containerincomeinfo}>
        <div className={styles.incomename}>{name}</div>
        <div>
          <p className={styles.text}>Classe</p>
          <p className={styles.incomebondtype}>{bondType}</p>
        </div>
      </div>
    </div>
  );
};

export default FixedIncomeTitle;
