//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
//-----------------------------------------------------------------< contexts >
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
import chart from "../../../assets/chart.svg";
//-------------------------------------------------------------------< styles >
import { Container, Info } from "./styles";
//--------------------------------------------------------------------< types >
//-------------------------------------------------------------------< global >
//======================================================[ < FixedIncomeFund > ]
export function FixedIncomeFund() {
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
  //---------------------------------------------------------------------------
  //----------------------------------------------------------------< methods >
  //---------------------------------------------------------------------------
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      <h1>Renda Fixa</h1>
      <section className="infos">
        <Info>
          <p>
            SALDO BRUTO
            <strong>R$ 207.653,10</strong>
          </p>
        </Info>

        <Info>
          <p>
            VALOR APLICADO
            <strong>R$ 170.025,64</strong>
          </p>
        </Info>

        <Info>
          <p>
            RESULTADO
            <strong>R$ 37.638,46</strong>
          </p>
        </Info>

        <Info>
          <p>
            RENTABILIDADE
            <strong>25,08%</strong>
          </p>
        </Info>

        <Info>
          <p>
            CDI
            <strong>23,68%</strong>
          </p>
        </Info>

        <Info>
          <p>
            % SOBRE CDI
            <strong>320%</strong>
          </p>
        </Info>
      </section>

      <section className="chart">
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
      </section>
    </Container>
  );
}
