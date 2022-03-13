import { FC } from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
	background-color: #ffffff;
`;

export interface CardProps {
	title: string;
}

const Card: FC<CardProps> = function ({ title, children }) {
	return (
		<CardWrapper>
			<h3>{title}</h3>
			{children}
		</CardWrapper>
	);
};

export default Card;
