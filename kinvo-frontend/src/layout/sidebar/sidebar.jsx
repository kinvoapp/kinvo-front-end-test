import React from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "./styles";
import {
  FaAngleRight,
  FaLayerGroup,
  FaThLarge,
  FaWindowRestore,
  FaTv,
  FaLock,
  FaSketch,
  FaChartPie,
  FaGgCircle
} from "react-icons/fa";

export default class Sidebar extends React.Component {
  render() {
    return (
      <Navigation>
        <nav>
          <ul className="nav">
            <li>
              <FaChartPie />
              <NavLink exact to="/resumo_carreira">
                resumo da carreira
              </NavLink>
              <FaAngleRight />
            </li>
            <li>
              <FaThLarge />
              <NavLink to="/meus_pedidos">meus produtos</NavLink>
              <FaAngleRight />
            </li>
            <li>
              <FaWindowRestore />
              <NavLink to="/meus_proventos">meus proventos</NavLink>
              <FaAngleRight />
            </li>
            <li>
              <FaLayerGroup />
              <NavLink to="/">análise por classe de produto</NavLink>
              <FaAngleRight />
            </li>
            <li>
              <FaSketch />
              <NavLink to="/rentabilidade_real">rentabilidade real</NavLink>
              <FaAngleRight />
            </li>
            <li>
              <FaTv />
              <NavLink to="/projecao_carreira">projeção da carreira</NavLink>
              <FaAngleRight />
            </li>
            <li>
              <FaGgCircle />
              <NavLink to="/risco_retorno">risco x retorno</NavLink>
              <FaAngleRight />
            </li>
            <li>
              <FaLock />
              <NavLink to="/cobertura_fgc">cobertura do FGC</NavLink>
              <FaAngleRight />
            </li>
          </ul>
        </nav>
      </Navigation>
    );
  }
}
