import styled from "styled-components";

export const CardContainer = styled.div`
	width: 100%;
	min-width: 13rem;
	height: fit-content;

	position: relative;

	display: flex;
	flex-direction: column;
	gap: 0.3rem;

	padding: 1.5rem 2rem;

	background-color: #fff;
	border-radius: 1rem;
	box-shadow: 0px 2px 20px #0000000d;

	&::before {
		content: "";
		position: absolute;
		top: 8px;
		left: 8px;

		width: 2px;
		height: 70%;

		border-radius: 100px;
		background-color: rgb(218, 224, 227);
	}

	small {
		color: #4e5b61;
		text-transform: uppercase;
	}

	strong {
		color: #4c309b;
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
