import "./Main.css";
import React from "react";
import SideSection from "../SideSection/SideSection";
import MainSection from "../MainSection/MainSection";

function Main({ rendaFixa }) {
  return (
    <main className='main-content'>
      <SideSection />
      <MainSection rendaFixa={rendaFixa} />
    </main>
  );
}

export default Main;
