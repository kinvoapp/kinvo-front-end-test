import "./Main.css";
import React from "react";
import SideSection from "../SideSection/SideSection";
import MainSection from "../MainSection/MainSection";

function Main({ rendaFixa, minhasRendasFixas, setSearchText }) {
  return (
    <main className='main-content'>
      <SideSection />

      <MainSection
        rendaFixa={rendaFixa}
        minhasRendasFixas={minhasRendasFixas}
        setSearchText={setSearchText}
      />
    </main>
  );
}

export default Main;
