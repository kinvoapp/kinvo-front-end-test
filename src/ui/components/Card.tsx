import { FC, ReactElement } from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
	display: flex;
	flex-direction: column;

	background-color: #ffffff;

	box-sizing: border-box;
	padding: 18px;
	border-radius: 15px;
`;

const CardHeader = styled.div`
	align-self: stretch;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const CardFooter = styled.div`
	align-self: stretch;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export interface CardProps {
	title: string;
	headerComponent?: ReactElement;
	footerComponent?: ReactElement;
}

const Card: FC<CardProps> = function ({
	title,
	headerComponent,
	footerComponent,
	children,
}) {
	return (
		<CardWrapper>
			<CardHeader>
				<h3>{title}</h3> {headerComponent}
			</CardHeader>
			{children}
			<CardFooter>{footerComponent}</CardFooter>
		</CardWrapper>
	);
};

export default Card;
