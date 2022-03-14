import { FC } from "react";
import styled from "styled-components";
import { FixedIncomeService } from "../../lib/useCases/service";
import DataCard from "./DataCard";

const IncomeCard = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: stretch;

	border-width: 0px 0px 1px 0px;
	border-style: solid;
	border-color: #c2c5cc;

	box-sizing: border-box;
	padding: 18px 0px;
	gap: 9px;
`;

const TitleItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: baseline;

	border-radius: 15px;
	border-width: 1px;
	border-style: solid;
	border-color: #c2c5cc;

	box-sizing: border-box;
	padding: 9px;
`;

const InnerCardItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	gap: 9px;
`;

const InnerCardTitle = styled.h4`
	margin: 5px;
	color: #4e5b61;
	font-size: 9px;
	font-weight: lighter;
	text-transform: uppercase;
`;

const InnerCard: FC<{ title: string }> = function ({ title, children }) {
	return (
		<TitleItem>
			<InnerCardTitle>{title}</InnerCardTitle>
			<InnerCardItem>{children}</InnerCardItem>
		</TitleItem>
	);
};

const ItemName = styled.p`
	/* flex-grow: 0; */
	/* flex-shrink: 1; */
	/* flex-basis: 180px; */
	max-width: 180px;
	font-size: 12px;
	color: #4e5b61;
`;

export interface FixedIncomeTableProps {
	list?: FixedIncomeService["snapshotByProduct"];
}

const FixedIncomeTable: FC<FixedIncomeTableProps> = function ({ list }) {
	return (
		<>
			{list?.map(({ fixedIncome, position, due }) => (
				<IncomeCard key={fixedIncome.portfolioProductId}>
					<InnerCard title="Título">
						<ItemName>{fixedIncome.name}</ItemName>
						<DataCard
							label="Classe"
							value={fixedIncome.bondType}
							color="#8A51BA"
						/>
					</InnerCard>
					<InnerCard title="Minha Posição">
						<DataCard
							label="Valor Inves."
							value={position.valueApplied.toLocaleString()}
							color="#38BFA0"
						/>
						<DataCard
							label="Saldo Bruto"
							value={position.equity.toLocaleString()}
							color="#38BFA0"
						/>
						<DataCard
							label="Rent."
							value={position.profitability.toLocaleString()}
							color="#38BFA0"
						/>
						<DataCard
							label="% da Cart."
							value={position.portfolioPercentage.toLocaleString()}
							color="#38BFA0"
						/>
						<DataCard
							label="CDI"
							value={position.indexerValue.toLocaleString()}
							color="#38BFA0"
						/>
						<DataCard
							label="Sobre CDI"
							value={position.percentageOverIndexer.toLocaleString()}
							color="#38BFA0"
						/>
					</InnerCard>
					<InnerCard title="Vencimento">
						<DataCard label="Data Venc." value={due.date} color="#008DCB" />
						<DataCard
							label="Dias até Venc."
							value={due.daysUntilExpiration.toString()}
							color="#008DCB"
						/>
					</InnerCard>
				</IncomeCard>
			))}
		</>
	);
};

export default FixedIncomeTable;
