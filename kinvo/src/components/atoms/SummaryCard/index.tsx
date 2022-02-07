import * as S from "./index.style";

interface SummaryCardProps {
	label?: string;
	value?: number;
	valueType: "percent" | "currency";
}

export const SummaryCard = ({ value, label, valueType }: SummaryCardProps) => {
	return (
		<S.CardContainer>
			<small>{label}</small>
			{valueType === "percent" ? (
				<strong>{`${value?.toLocaleString("pt-BR")}%`}</strong>
			) : (
				<strong>
					{value?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
				</strong>
			)}
		</S.CardContainer>
	);
};
