import React, { useState } from "react";
import Pagination from "../pagination/pagination";
import "./RendaFixa.css";

const RendaFixa = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(5);

  //Get current elements
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = props.info.data.snapshotByProduct.slice(
    indexOfFirstElement,
    indexOfLastElement
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toolbar = () => {
    return (      
      <div className="toolbarContainer">
      <h6>Minhas Rendas Fixas</h6>
      <div className="input-group col-md-6 toolbar">
        <select className="form-control border-end-0 border rounded-pill">
          <option selected>Ordenar por</option>
          <option value="1">Vencimento</option>
          <option value="2">Titulo</option>
        </select>

        <input
          className="form-control border-end-0 border rounded-pill"
          type="text"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <span className="input-group-append">
          <button
            className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3"
            type="button"
          >
            <i class="fa fa-search" />
          </button>
        </span>
      </div>
    </div>
    
    );
  };

  const rendasFixas = (element, index) => {
    return (
      <div className="card-group row" key={index * 100}>
        <div class="col-sm-4">
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    TÍTULO <i class="fa fa-info-circle" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="row">
                <p className="card-text">{element.fixedIncome.name}</p>
                <p className="card-text">
                  CLASSE <br />{" "}
                  {element.fixedIncome.bondType}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    MINHA POSIÇÃO <i class="fa fa-info-circle" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="row">
                <p className="card-text">
                  {" "}
                  VALOR INVES.<br />{" "}
                  {element.position.valueApplied}
                </p>
                <p className="card-text">
                  {" "}
                  SALDO BRUTO <br />{" "}
                  {element.position.equity}
                </p>
                <p className="card-text">
                  {" "}
                  RENT. <br />{" "}
                  {element.position.profitability}%
                </p>
                <p className="card-text">
                  {" "}
                  % DA CART.<br />{" "}
                  {element.position.portfolioPercentage}%
                </p>
                <p className="card-text">
                  {element.position.indexerLabel}
                  <br /> {element.position.indexerValue}
                </p>
                <p className="card-text">
                  SOBRE CDI <br />{" "}
                  {element.position.percentageOverIndexer}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-2">
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    VENCIMENTO <i class="fa fa-info-circle" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="row">
                <p className="card-text">
                  DATA VENC. <br />
                  {element.due.date}
                </p>
                <p className="card-text">
                  DATA ATÉ VENC.
                  <br />
                  {element.due.daysUntilExpiration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="rendaFixaContainer">
      {toolbar()}

      <div className="rendasfixas">
        {currentElements
          .filter((product) => {
            console.log(product);
            if (searchTerm == "") {
              return product;
            } else if (
              product.fixedIncome.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })
          .map((element, index) => {
            return rendasFixas(element, index);
          })}
      </div>
      <Pagination
        elementsPerPage={elementsPerPage}
        totalElements={props.info.data.snapshotByProduct.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RendaFixa;
