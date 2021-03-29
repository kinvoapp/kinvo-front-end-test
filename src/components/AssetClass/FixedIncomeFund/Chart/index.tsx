//-------------------------------------------------------------------< assets >
import chart from "../../../../assets/chart.svg";
//-------------------------------------------------------------------< styles >
import { Container } from "./styles";
//================================================================[ < Chart > ]
export function Chart() {
  //-------------------------------------------------------------< properties >
  const y = [0, 4, 6, 8, 10, 12];
  const x = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      <h2>Rentabilidade dos Títulos</h2>
      <div>
        <div className="y axis">
          {y.map((value, index) => (
            <span key={index}>{value ? value.toFixed(3) : value}</span>
          ))}
        </div>
        <img src={chart} alt="Gráfico" />
        <div className="x axis">
          {x.map((value, index) => (
            <span key={index}>{value}</span>
          ))}
        </div>
      </div>
    </Container>
  );
}
