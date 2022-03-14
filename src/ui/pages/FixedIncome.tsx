import { FC, useState } from "react";
import styled from "styled-components";
import { useFixedIncomeAsset } from "../../lib/interfaces/api";
import Card from "../components/Card";
import FixedIncomeTable from "../components/FixedIncomeTable";
import OverviewCard from "../components/OverviewCard";
import Pagination from "../components/Pagination";

const Root = styled.div`
	display: flex;
	flex-direction: column;

	gap: 20px;
`;

const OverviewData = styled.article`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	gap: 10px;
`;

interface FixedIncomeSelectionProps {
	searchCb: (value: string) => any;
	orderCb: (value: string) => any;
}

const StyledSelectionInput = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	gap: 8px;
`;

const StyledSelect = styled.select`
	background-color: #ffffff;

	box-sizing: border-box;
	padding: 4px 8px;
	border-radius: 15px;
	border-color: #707b81;

	color: #707b81;
`;

const StyledInput = styled.input`
	background-color: #ffffff;

	box-sizing: border-box;
	padding: 4px 8px;
	border-radius: 15px;
	border-color: #707b81;

	color: #707b81;
`;

const FixedIncomeSelection: FC<FixedIncomeSelectionProps> = function ({
	children,
	searchCb,
	orderCb,
}) {
	return (
		<StyledSelectionInput>
			<StyledSelect
				name="orderIncome"
				onChange={(ev) => orderCb(ev.target.value)}
			>
				{children}
			</StyledSelect>
			<StyledInput
				type="text"
				name="searchIncome"
				placeholder="Pesquisar..."
				onChange={(ev) => searchCb(ev.target.value)}
			/>
		</StyledSelectionInput>
	);
};

const FixedIncomePage: FC = function () {
	const [search, setSearch] = useState("");
	const [order, setOrder] = useState("");
	const [pageOffset, setPageOffset] = useState(0);

	const { data, error, loading, availableOptions, nOfPages } =
		useFixedIncomeAsset({
			nItens: 5,
			searchBy: search,
			orderBy: order,
			offset: pageOffset,
		});

	return (
		<Root>
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
			<Card title="Rentabilidade dos Títulos"></Card>

			<Card
				title="Minhas rendas fixas"
				headerComponent={
					<FixedIncomeSelection searchCb={setSearch} orderCb={setOrder}>
						{[["none", "Ordenar por"], ...Object.entries(availableOptions)].map(
							([k, v]) => (
								<option key={k} value={k}>
									{v}
								</option>
							)
						)}
					</FixedIncomeSelection>
				}
				footerComponent={
					<Pagination
						nOfPages={nOfPages}
						page={pageOffset}
						previousCb={() => setPageOffset((p) => p - 1)}
						nextCb={() => setPageOffset((p) => p + 1)}
					/>
				}
			>
				<FixedIncomeTable list={data?.snapshotByProduct} />
			</Card>
			<Card title="Divisão de carteira por tipos"></Card>
			<Card title="Divisão de carteira por título"></Card>
		</Root>
	);
};

export default FixedIncomePage;
