import React, { useState, useEffect } from "react";
import List from "./List";
import Summary from "./Summary";
import Cards from "./Cards";
import SearchIcon from "../assets/searchIcon.png";
import Filter from "react-filter-search";

const api = `https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation`;

function Container() {
  const [apiData, setaApiData] = useState();
  const [value, setValue] = useState("");
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(response => {
        setaApiData(response);
        setLoading(false);
      });
  }, []);

  const cssFilter =
    value === ""
      ? {
          display: "none"
        }
      : {
          zIndex: 9,
          position: "fixed",
          backgroundColor: "#EEF2F4",
          marginLeft: "2.7vw",
          padding: "20px",
          fontFamily: "Helvetica",
          fontSize: "14px",
          color: "#000"
        };

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);
    if (value === "") {
      setProduct(undefined);
    }
  };

  const handleClick = event => {
    const value = event.target.className;
    const product = apiData.data.products.filter(product => {
      if (value === product.productName) {
        return product;
      }
    });
    setProduct(product);
  };

  return (
    <>
      <h2
        style={{
          fontFamily: "Helvetica",
          fontSize: "20px",
          color: "#707B81"
        }}
      >
        Análise por Classe de Ativos
      </h2>
      <div style={{ display: "inline-flex", width: "100%" }}>
        <Cards />
      </div>
      {loading ? null : (
        <>
          <div style={{ backgroundColor: "#F8FAFB", padding: "18px" }}>
            <div style={{ display: "inline-flex" }}>
              <Summary data={apiData.data.summary} />
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "25px",
                borderRadius: "15px"
              }}
            >
              <div style={{ display: "inline-flex" }}>
                <h2
                  style={{
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    color: "#707B81"
                  }}
                >
                  Fundos
                </h2>
                <div
                  style={{
                    marginLeft: "60vw",
                    cursor: "pointer",
                    alignSelf: "center"
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      borderRadius: "15px",
                      backgroundColor: "#EEF2F4",
                      width: "16rem",
                      height: "2.2rem"
                    }}
                  >
                    <img
                      src={SearchIcon}
                      alt="search icon"
                      style={{
                        marginLeft: "0.5vw",
                        height: "20px",
                        width: "18px",
                        alignSelf: "center",
                        cursor: "auto"
                      }}
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={event => handleChange(event)}
                      style={{
                        width: "15rem",
                        height: "2rem",
                        border: "none",
                        borderRadius: "15px",
                        backgroundColor: "#EEF2F4",
                        fontFamily: "Helvetica",
                        fontSize: "14px",
                        color: "#000",
                        marginLeft: "7px",
                        outline: "none"
                      }}
                    />
                  </div>
                  <div style={cssFilter}>
                    <Filter
                      value={value}
                      data={apiData.data.products}
                      renderResults={results => (
                        <>
                          {results.map(product => (
                            <div style={{ padding: "5px" }}>
                              <span
                                className={product.productName}
                                onClick={event => handleClick(event)}
                              >
                                {product.productName}
                              </span>
                            </div>
                          ))}
                        </>
                      )}
                    />
                  </div>
                </div>
              </div>
              {product === undefined || value === "" ? (
                apiData.data.products.map(product => {
                  return <List key={product.productName} data={product} />;
                })
              ) : (
                <List data={product[0]} />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Container;
