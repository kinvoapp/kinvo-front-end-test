import styles from "./Due.module.css";

const Due = ({ infoicon, date, daysUntilExpiration }) => {
  let newDate;
  function formatDate() {
    let oldDate = Array.from(date);
    oldDate.splice(2, 1, ".");
    oldDate.splice(5, 1, ".");
    return oldDate;
  }

  newDate = formatDate();

  return (
    <div className={styles.containerdue}>
      <div className={styles.title}>
        <p>vencimento</p>
        <img src={infoicon} alt="" />
      </div>
      <div className={styles.containerdueinfo}>
        <div>
          <p>Data venc.</p>
          <p className={styles.number}>{newDate}</p>
        </div>
        <div>
          <p>Dias até venc.</p>
          <p className={styles.number}>{daysUntilExpiration}</p>
        </div>
      </div>
    </div>
  );
};

export default Due;
