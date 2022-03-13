import { FC } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import OverviewCard from "../components/OverviewCard";

const OverviewData = styled.article`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	gap: 10px;
`;

const FixedIncomePage: FC = function () {
	return (
		<>
			<h2>Renda Fixa</h2>
			<OverviewData>
				<h3 hidden>Resumo</h3>
				<OverviewCard label="Saldo Bruto" value={"R$ 207.653,10"} />
				<OverviewCard label="Valor Aplicado" value={"R$ 170.025,64"} />
				<OverviewCard label="Resultado" value={"R$ 37.638,46"} />
				<OverviewCard label="Rentabilidade" value={"25,08%"} />
				<OverviewCard label="CDI" value={"23,68%"} />
				<OverviewCard label="% sobre CDI" value={"320%"} />
			</OverviewData>
			<Card title="Rentabilidade dos Títulos">
				<img
					src="https://www.slideteam.net/media/catalog/product/cache/1280x720/s/a/sales_performance_survey_graph_sample_presentation_ppt_Slide01.jpg"
					alt="Imagem Teste"
					width={500}
				/>
			</Card>
			<Card title="Minhas rendas fixas"></Card>
			<Card title="Divisão de carteira por tipos"></Card>
			<Card title="Divisão de carteira por título"></Card>
		</>
	);
};

export default FixedIncomePage;
