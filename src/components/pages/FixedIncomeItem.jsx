import FixedIncomeTitle from "./FixedIncomeTitle";
import Position from "./Position";
import Due from "./Due";

import infoicon from "../../assets/infoicon.svg";

import styles from "./FixedIncomeItem.module.css";

const FixedIncomeItem = ({
  due,
  fixedIncome,
  position,
  backgroudLightGray,
}) => {
  let bacgroundLightGray = "";
  if (backgroudLightGray) {
    bacgroundLightGray = "backgroundlightgray";
  }

  return (
    <div
      className={`${styles.containerfixedincomeitems} ${styles[bacgroundLightGray]}`}
    >
      <FixedIncomeTitle
        bondType={fixedIncome.bondType}
        name={fixedIncome.name}
        infoicon={infoicon}
      />
      <Position
        indexerValue={position.indexerValue}
        percentageOverIndexer={position.percentageOverIndexer}
        portfolioPercentage={position.portfolioPercentage}
        profitability={position.profitability}
        valueApplied={position.valueApplied}
        equity={position.equity}
        icon={infoicon}
      />
      <Due
        infoicon={infoicon}
        date={due.date}
        daysUntilExpiration={due.daysUntilExpiration}
      />
    </div>
  );
};

export default FixedIncomeItem;
