import "./Main.css";
import React from "react";
import SideSection from "../SideSection/SideSection";
import MainSection from "../MainSection/MainSection";

function Main() {
  return (
    <main className='main-content'>
      <SideSection />
      <MainSection />
    </main>
  );
}

export default Main;
