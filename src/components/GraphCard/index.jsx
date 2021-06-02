import { GraphCard, GraphCardTitle, GraphCardBody, GraphCardFooter } from "./styles";
import ChartImg from "../../assets/chart.svg";

export function ChartCard({ title, itemsName }) {
  return (
    <GraphCard>
      <GraphCardTitle>
        <h1>{title}</h1>
      </GraphCardTitle>
      <GraphCardBody>
        <img src={ChartImg} alt="graph" />
      </GraphCardBody>
      <GraphCardFooter>
        <ul>
          <li>{itemsName}</li>
          <li>{itemsName}</li>
          <li>{itemsName}</li>
          <li>{itemsName}</li>
          <li>{itemsName}</li>
          <li>{itemsName}</li>
        </ul>
      </GraphCardFooter>
    </GraphCard>
  );
}
