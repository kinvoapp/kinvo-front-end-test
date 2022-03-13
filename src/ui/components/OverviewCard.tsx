import { FC } from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
	background-color: #ffffff;

	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 100px;

	padding: 5px;
	border-radius: 15px;
`;

export interface OverviewCardProps {
	label: string;
	value: string;
}

const OverviewCard: FC<OverviewCardProps> = function ({ label, value }) {
	return (
		<CardWrapper>
			<h4>{label}</h4>
			<p>{value}</p>
		</CardWrapper>
	);
};

export default OverviewCard;
