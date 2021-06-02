import { FixedIncomeTitle } from "./styles";
import InfoIcon from "../../assets/icons/info.svg";

export function FixedIncomeDueDateCard({ date, daysUntilExpiration }) {
  return (
    <FixedIncomeTitle>
      <div className="title">
        <span>VENCIMENTO</span>
        <img src={InfoIcon} alt="informação" />
      </div>
      <div className="title-body">
        <div className="class-blue ">
          <span>DATA VENC.</span>
          <strong>{date}</strong>
        </div>
        <div className="class-blue ">
          <span>DIAS ATÉ VENC.</span>
          <strong>{daysUntilExpiration}</strong>
        </div>
      </div>
    </FixedIncomeTitle>
  );
}
