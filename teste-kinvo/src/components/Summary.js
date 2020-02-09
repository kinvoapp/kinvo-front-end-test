import React from "react";

const Summary = props => (
  <>
    <div
      style={{
        display: "block",
        backgroundColor: "#fff",
        textAlignLast: "center",
        marginBottom: "1.2vh",
        borderRadius: "10px",
        padding: "3vh 3.8vw"
      }}
    >
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "10px",
          color: "#707B81",
          textTransform: "uppercase",
          padding: "0",
          margin: "0",
          marginBottom: "5px"
        }}
      >
        saldo bruto
      </h5>
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "18px",
          color: "#707B81",
          padding: "0",
          margin: "0"
        }}
      >
        R${" "}
        {parseFloat(props.data.grossBalance)
          .toFixed(2)
          .replace(".", ",")}
      </h5>
    </div>
    <div
      style={{
        display: "block",
        marginLeft: "2vw",
        backgroundColor: "#fff",
        textAlignLast: "center",
        marginBottom: "1.2vh",
        borderRadius: "10px",
        padding: "3vh 3.8vw"
      }}
    >
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "10px",
          color: "#707B81",
          textTransform: "uppercase",
          padding: "0",
          margin: "0",
          marginBottom: "5px"
        }}
      >
        valor aplicado
      </h5>
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "18px",
          color: "#707B81",
          padding: "0",
          margin: "0"
        }}
      >
        R${" "}
        {parseFloat(props.data.appliedValue)
          .toFixed(2)
          .replace(".", ",")}
      </h5>
    </div>
    <div
      style={{
        display: "block",
        marginLeft: "2vw",
        backgroundColor: "#fff",
        textAlignLast: "center",
        marginBottom: "1.2vh",
        borderRadius: "10px",
        padding: "3vh 3.8vw"
      }}
    >
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "10px",
          color: "#707B81",
          textTransform: "uppercase",
          padding: "0",
          margin: "0",
          marginBottom: "5px"
        }}
      >
        ganho de capital
      </h5>
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "18px",
          color: "#707B81",
          padding: "0",
          margin: "0"
        }}
      >
        R${" "}
        {parseFloat(props.data.capitalGains)
          .toFixed(2)
          .replace(".", ",")}
      </h5>
    </div>
    <div
      style={{
        display: "block",
        marginLeft: "2vw",
        backgroundColor: "#fff",
        textAlignLast: "center",
        marginBottom: "1.2vh",
        borderRadius: "10px",
        padding: "3vh 3.8vw"
      }}
    >
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "10px",
          color: "#707B81",
          textTransform: "uppercase",
          padding: "0",
          margin: "0",
          marginBottom: "5px"
        }}
      >
        total distribuídos
      </h5>
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "18px",
          color: "#707B81",
          padding: "0",
          margin: "0"
        }}
      >
        R${" "}
        {parseFloat(props.data.earnings)
          .toFixed(2)
          .replace(".", ",")}
      </h5>
    </div>
    <div
      style={{
        display: "block",
        marginLeft: "2vw",
        backgroundColor: "#fff",
        textAlignLast: "center",
        marginBottom: "1.2vh",
        borderRadius: "10px",
        padding: "3vh 3.8vw"
      }}
    >
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "10px",
          color: "#707B81",
          textTransform: "uppercase",
          padding: "0",
          margin: "0",
          marginBottom: "5px"
        }}
      >
        yield
      </h5>
      <h5
        style={{
          fontFamily: "Helvetica",
          fontSize: "18px",
          color: "#707B81",
          padding: "0",
          margin: "0"
        }}
      >
        {parseFloat(props.data.yield)
          .toFixed(2)
          .replace(".", ",")}
        %
      </h5>
    </div>
  </>
);

export default Summary;
