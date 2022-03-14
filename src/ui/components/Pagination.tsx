import { FC } from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
	background-color: #ffffff;

	display: flex;
	flex-direction: row;

	gap: 15px;
`;

const NumberSelector = styled.button<{ highlight?: boolean }>`
	background-color: ${(props) => (props.highlight ? "#DCE0E3" : "#ffffff")};
	color: ${(props) => (props.highlight ? "#ffffff" : "#C2C5CC")};

	border-style: solid;
	border-width: 1px;
	border-color: #edeef0;
`;

export interface PaginationProps {
	page: number;
	nOfPages: number;
	previousCb?: () => void;
	nextCb?: () => void;
}

const Pagination: FC<PaginationProps> = function ({
	page,
	nOfPages,
	previousCb,
	nextCb,
}) {
	return (
		<CardWrapper>
			<NumberSelector disabled={page === 0} onClick={previousCb}>
				{"<"}
			</NumberSelector>
			{[...Array(nOfPages)].map((_p, i) => (
				<NumberSelector key={i} disabled highlight={i === page}>
					{i + 1}
				</NumberSelector>
			))}
			<NumberSelector disabled={page === nOfPages - 1} onClick={nextCb}>
				{">"}
			</NumberSelector>
		</CardWrapper>
	);
};

export default Pagination;
