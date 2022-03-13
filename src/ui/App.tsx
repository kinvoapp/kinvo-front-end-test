import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import FixedIncomePage from "./pages/FixedIncome";

const linksList = [
	{ groupLabel: "Resumo Da Carteira", links: [] },
	{ groupLabel: "Meus Produtos", links: [] },
	{ groupLabel: "Meus Proventos", links: [] },
	{
		groupLabel: "Classe de Ativos",
		links: [
			{ label: "Ação", url: "#" },
			{ label: "Fundo", url: "#" },
			{ label: "Fundo Imobiliário", url: "#" },
			{ label: "Fundo Renda Fixa", url: "/fixed-income" },
		],
	},
	{ groupLabel: "Rentabilidade Real", links: [] },
	{ groupLabel: "Projeção da Carteira", links: [] },
	{ groupLabel: "Risco x Retorno", links: [] },
	{ groupLabel: "Cobertura do FGC", links: [] },
];

const Root = styled.div`
	min-height: 100vh;
`;

const ScrollableContent = styled.div`
	display: flex;
	flex-direction: row;
`;

const MainContent = styled.main`
	padding: 21px;
`;

function App() {
	return (
		<BrowserRouter>
			<Root>
				<Header />
				<ScrollableContent>
					<Nav linksList={linksList} />
					<MainContent>
						<Routes>
							<Route path="/" element={<Navigate to="/fixed-income" />} />
							<Route path="/fixed-income" element={<FixedIncomePage />} />
						</Routes>
					</MainContent>
				</ScrollableContent>
			</Root>
		</BrowserRouter>
	);
}

export default App;
