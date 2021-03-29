//-------------------------------------------------------------------< assets >
import pizzaChart from "../../../../assets/pizza-chart.svg";
//-------------------------------------------------------------------< styles >
import { Container } from "./styles";
//====================================================[ < PortfolioDivision > ]
export function PortfolioDivision() {
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      <section>
        <h2>Divisão de Carteira por Tipos</h2>
        <main>
          <img src={pizzaChart} alt="Gráfico" />
        </main>
        <ul>
          <li>Tipo</li>
          <li>Tipo</li>
          <li>Tipo</li>
          <li>Tipo</li>
          <li>Tipo</li>
          <li>Tipo</li>
        </ul>
      </section>

      <section>
        <h2>Divisão de Carteira por Título</h2>
        <main>
          <img src={pizzaChart} alt="Gráfico" />
        </main>
        <ul>
          <li>Título</li>
          <li>Título</li>
          <li>Título</li>
          <li>Título</li>
          <li>Título</li>
          <li>Título</li>
        </ul>
      </section>
    </Container>
  );
}
