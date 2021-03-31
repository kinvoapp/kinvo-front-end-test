import React, { useEffect, useState } from "react";
import "./ClasseDeAtivos.css";
import axios from "axios";
import graph from "../../assets/graph.svg";
import RendaFixa from "../renda-fixa/RendaFixa";

const ClasseDeAtivos = () => {
  const [info, setInfo] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    
    axios
      .get(
        "https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData"
      )
      .then((response) => setInfo(response.data))
      .catch((err) => setError(err));
  }, []);

  const card = (key, value) => {
    return (
      <div className="card top-card mw-100">
        <div className="card-body">
          <p className="card-title">
            {key.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
              return str.toUpperCase();
            })}
          </p>
          <p className="card-text">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboardContainer">

      {error ? (
        <div className="error">
          Não foi possível acessar seus dados. Por favor, tente novamente.
        </div>
      ) : (
        info && (
          
          <div className="rendaContainer">
            <h5>Renda Fixa</h5>
            <div className="cards card-deck">
              {Object.entries(info.data.snapshotByPortfolio).map((element) =>
                card(element[0], element[1])
              )}
            </div>
            <div className="card">
              <img className="card-img" src={graph} alt="graph" />
            </div>
            <RendaFixa 
            info={info}
            />

          </div>
        )
      )}
    </div>
  );
};

export default ClasseDeAtivos;
