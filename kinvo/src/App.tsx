import React from "react";
import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";

import "./App.style.css";
import { BondSummary } from "./components/BondSummary";
import { MyBonds } from "./components/MyBonds";

function App() {
	return (
		<>
			<Header />
			<main>
				<SideMenu />
				<section>
					<h1>Renda Fixa</h1>
					<BondSummary />
					<img src="./mainChart.svg" alt="Rentabilidade do Títulos" />
					<MyBonds />
				</section>
			</main>
		</>
	);
}

export default App;
