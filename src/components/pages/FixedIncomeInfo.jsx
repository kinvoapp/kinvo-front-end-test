import styles from "./FixedIncomeInfo.module.css";

const FixedIncomeInfo = ({ text, number, percentage }) => {
  let newNumber = number.toLocaleString("pt-br");

  return (
    <div className={styles.containerInfo}>
      <div className={styles.textContainer}>
        <p className={styles.text}>{text}</p>
        <div className={styles.number}>
          {percentage ? `${newNumber} %` : `R$ ${newNumber}`}
        </div>
      </div>
    </div>
  );
};

export default FixedIncomeInfo;
