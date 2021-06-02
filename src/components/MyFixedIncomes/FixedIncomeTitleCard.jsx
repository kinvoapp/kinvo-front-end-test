import { FixedIncomeTitle } from "./styles";
import InfoIcon from "../../assets/icons/info.svg";

export function FixedIncomeTitleCard({ description, incomeClass }) {
  return (
    <FixedIncomeTitle minus>
      <div className="title">
        <span>TÍTULO</span>
        <img src={InfoIcon} alt="informação" />
      </div>
      <div className="title-body">
        <strong>{description}</strong>
        <div className="class">
          <span>CLASSE</span>
          <strong>{incomeClass}</strong>
        </div>
      </div>
    </FixedIncomeTitle>
  );
}
