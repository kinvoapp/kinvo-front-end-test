import React from "react";
import logo1 from "../assets/logo1sideMenu.png";
import logo2 from "../assets/logo2sideMenu.png";
import logo3 from "../assets/logo3sideMenu.png";
import logo4 from "../assets/logo4sideMenu.png";
import logo5 from "../assets/logo5sideMenu.png";
import logo6 from "../assets/logo6sideMenu.png";
import logo7 from "../assets/logo7sideMenu.png";
import logo8 from "../assets/logo8sideMenu.png";
import path from "../assets/path.png";

export default class SideMenu extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "inline-flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3px",
            cursor: "pointer",
            borderBottom: "1px solid #CCCFD1"
          }}
        >
          <div
            style={{
              backgroundColor: "#DAE0E3",
              height: "32px",
              width: "32px",
              borderRadius: "15px"
            }}
          >
            <img
              src={logo1}
              alt="logo"
              style={{
                height: "20px",
                width: "20px",
                marginTop: "5px",
                marginLeft: "6.5px"
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Helvetica",
              color: "#707B81",
              fontSize: "14px"
            }}
          >
            Resumo Da Carteira
          </p>
          <img src={path} alt="path" style={{ height: "8px", width: "7px" }} />
        </div>
        <div
          style={{
            display: "inline-flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3px",
            cursor: "pointer",
            borderBottom: "1px solid #CCCFD1"
          }}
        >
          <div
            style={{
              backgroundColor: "#DAE0E3",
              height: "32px",
              width: "32px",
              borderRadius: "15px"
            }}
          >
            <img
              src={logo2}
              alt="logo"
              style={{
                height: "20px",
                width: "20px",
                marginTop: "5px",
                marginLeft: "6.5px"
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Helvetica",
              color: "#707B81",
              fontSize: "14px"
            }}
          >
            Meus Produtos
          </p>
          <img src={path} alt="path" style={{ height: "8px", width: "7px" }} />
        </div>
        <div
          style={{
            display: "inline-flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3px",
            cursor: "pointer",
            borderBottom: "1px solid #CCCFD1"
          }}
        >
          <div
            style={{
              backgroundColor: "#DAE0E3",
              height: "32px",
              width: "32px",
              borderRadius: "15px"
            }}
          >
            <img
              src={logo3}
              alt="logo"
              style={{
                height: "20px",
                width: "20px",
                marginTop: "5px",
                marginLeft: "6.5px"
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Helvetica",
              color: "#707B81",
              fontSize: "14px"
            }}
          >
            Meus Proventos
          </p>
          <img src={path} alt="path" style={{ height: "8px", width: "7px" }} />
        </div>
        <div
          style={{
            display: "inline-flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3px",
            cursor: "pointer",
            borderBottom: "1px solid #CCCFD1",
            backgroundColor: "#CCCFD1"
          }}
        >
          <div
            style={{
              backgroundColor: "#5D41AC",
              height: "32px",
              width: "32px",
              borderRadius: "15px"
            }}
          >
            <img
              src={logo4}
              alt="logo"
              style={{
                height: "20px",
                width: "20px",
                marginTop: "5px",
                marginLeft: "3px"
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Helvetica",
              color: "#707B81",
              fontSize: "14px",
              marginLeft: "5px"
            }}
          >
            Análise por Classe de Produto
          </p>
          <img src={path} alt="path" style={{ height: "8px", width: "7px" }} />
        </div>
        <div
          style={{
            display: "inline-flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3px",
            cursor: "pointer",
            borderBottom: "1px solid #CCCFD1"
          }}
        >
          <div
            style={{
              backgroundColor: "#DAE0E3",
              height: "32px",
              width: "32px",
              borderRadius: "15px"
            }}
          >
            <img
              src={logo5}
              alt="logo"
              style={{
                height: "20px",
                width: "20px",
                marginTop: "5px",
                marginLeft: "6.5px"
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Helvetica",
              color: "#707B81",
              fontSize: "14px"
            }}
          >
            Rentabilidade Real
          </p>
          <img src={path} alt="path" style={{ height: "8px", width: "7px" }} />
        </div>
        <div
          style={{
            display: "inline-flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3px",
            cursor: "pointer",
            borderBottom: "1px solid #CCCFD1"
          }}
        >
          <div
            style={{
              backgroundColor: "#DAE0E3",
              height: "32px",
              width: "32px",
              borderRadius: "15px"
            }}
          >
            <img
              src={logo6}
              alt="logo"
              style={{
                height: "20px",
                width: "20px",
                marginTop: "5px",
                marginLeft: "6.5px"
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Helvetica",
              color: "#707B81",
              fontSize: "14px"
            }}
          >
            Projeção da Carteira
          </p>
          <img src={path} alt="path" style={{ height: "8px", width: "7px" }} />
        </div>
        <div
          style={{
            display: "inline-flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3px",
            cursor: "pointer",
            borderBottom: "1px solid #CCCFD1"
          }}
        >
          <div
            style={{
              backgroundColor: "#DAE0E3",
              height: "32px",
              width: "32px",
              borderRadius: "15px"
            }}
          >
            <img
              src={logo7}
              alt="logo"
              style={{
                height: "20px",
                width: "20px",
                marginTop: "5px",
                marginLeft: "6.5px"
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Helvetica",
              color: "#707B81",
              fontSize: "14px"
            }}
          >
            Risco x Retorno
          </p>
          <img src={path} alt="path" style={{ height: "8px", width: "7px" }} />
        </div>
        <div
          style={{
            display: "inline-flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3px",
            cursor: "pointer",
            borderBottom: "1px solid #CCCFD1"
          }}
        >
          <div
            style={{
              backgroundColor: "#DAE0E3",
              height: "32px",
              width: "32px",
              borderRadius: "15px"
            }}
          >
            <img
              src={logo8}
              alt="logo"
              style={{
                height: "20px",
                width: "20px",
                marginTop: "5px",
                marginLeft: "6.5px"
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Helvetica",
              color: "#707B81",
              fontSize: "14px"
            }}
          >
            Cobertura do FGC
          </p>
          <img src={path} alt="path" style={{ height: "8px", width: "7px" }} />
        </div>
      </>
    );
  }
}
