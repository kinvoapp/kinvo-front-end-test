import styles from "./Position.module.css";

const Position = ({
  icon,
  equity,
  indexerValue,
  percentageOverIndexer,
  portfolioPercentage,
  profitability,
  valueApplied,
}) => {
  return (
    <div className={styles.containerposition}>
      <div className={styles.title}>
        <p>Minha posição</p>
        <img src={icon} alt="" />
      </div>
      <div className={styles.containerpositioninfo}>
        <div>
          <p>valor inves.</p>
          <p className={styles.number}>{valueApplied.toLocaleString("BRL")}</p>
        </div>
        <div>
          <p> saldo bruto.</p>
          <p className={styles.number}>{equity.toLocaleString("BRL")}</p>
        </div>
        <div>
          <p>rent.</p>
          <p className={styles.number}>
            {profitability.toLocaleString("BRL")} %
          </p>
        </div>
        <div>
          <p>% da cart.</p>
          <p className={styles.number}>
            {portfolioPercentage.toLocaleString("BRL")} %
          </p>
        </div>
        <div>
          <p>cdi</p>
          <p className={styles.number}>{indexerValue.toLocaleString("BRL")}</p>
        </div>
        <div>
          <p>sobre o cdi</p>
          <p className={styles.number}>
            {percentageOverIndexer.toLocaleString("BRL")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Position;
