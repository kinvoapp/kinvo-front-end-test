import React from "react";
import Header from "../components/header";
import Container from "../components/Container";
import SideMenu from "../components/sideMenu";

export default class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            height: "10vh",
            backgroundColor: "#FFFFFF",
            position: "fixed",
            width: "100%"
          }}
        >
          <Header />
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "100%",
              width: "12%",
              marginTop: "11vh",
              position: "fixed",
              left: 0
            }}
          >
            <SideMenu />
          </div>
          <div
            style={{
              position: "initial",
              backgroundColor: "#DAE0E3",
              marginLeft: "14vw",
              marginTop: "10.5vh",
              width: "100%",
              padding: "20px"
            }}
          >
            <Container />
          </div>
        </div>
      </>
    );
  }
}
