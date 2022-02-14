import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { SummaryCard } from "../atoms/SummaryCard";
import * as S from "./index.style";

interface Summary {
	equity: number;
	valueApplied: number;
	equityProfit: number;
	percentageProfit: number;
	indexerValue: number;
	percentageOverIndexer: number;
}

export const BondSummary = () => {
	const [summary, setSummary] = useState<Summary | undefined>();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await api.get("/");
			setSummary(data?.data?.snapshotByPortfolio);
		};

		fetchData();
	}, []);

	return (
		<S.SummaryContainer>
			<SummaryCard value={summary?.equity} label="SALDO BRUTO" valueType="currency" />
			<SummaryCard
				value={summary?.valueApplied}
				label="VALOR APLICADO"
				valueType="currency"
			/>
			<SummaryCard value={summary?.equityProfit} label="RESULTADO" valueType="currency" />
			<SummaryCard
				value={summary?.percentageProfit}
				label="RENTABILIDADE"
				valueType="percent"
			/>
			<SummaryCard value={summary?.indexerValue} label="CDI" valueType="percent" />
			<SummaryCard
				value={summary?.percentageOverIndexer}
				label="% SOBRE CDI"
				valueType="percent"
			/>
		</S.SummaryContainer>
	);
};
