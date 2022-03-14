import { FC } from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
	background-color: #ffffff;

	/* flex-grow: 1; */
	flex-shrink: 0;
	/* flex-basis: 100px; */

	box-sizing: border-box;
	padding: 5px;
	border-radius: 15px;

	font-size: 12px;
`;

const CardLabel = styled.p`
	color: #4e5b61;
`;
const CardValue = styled.p`
	color: ${(props) => props.color};
	font-size: medium;
`;

export interface OverviewCardProps {
	label: string;
	value: string;
	color?: string;
}

const DataCard: FC<OverviewCardProps> = function ({ label, value, color }) {
	return (
		<CardWrapper>
			<CardLabel>{label}</CardLabel>
			<CardValue color={color}>{value}</CardValue>
		</CardWrapper>
	);
};

export default DataCard;
