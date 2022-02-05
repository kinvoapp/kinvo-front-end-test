import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;

	top: 0;
	position: -webkit-sticky;
	position: sticky;

	z-index: 2;

	display: flex;
	justify-content: space-between;
	align-items: center;

	margin: auto;
	padding: 2.5rem 5rem;

	background-color: #fff;
	box-shadow: -1px 1px 1px rgb(0 0 0 / 10%);
`;

export const HeaderBox = styled.div`
	display: flex;
	align-items: center;
	gap: 4.5rem;
`;

export const HeaderSurface = styled.div<{ boldLabel?: boolean }>`
	display: flex;
	gap: 1rem;
	align-items: center;

	div {
		display: flex;
		flex-direction: column;
		color: #627179;
		line-height: 2.2rem;

		p {
			font-size: 1rem;
			font-weight: ${(props) => (props.boldLabel ? "bold" : "normal")};
		}

		h1 {
			font-size: 1.8rem;
			font-weight: 700;
		}
	}
`;

export const Hamburger = styled.img`
	cursor: pointer;
`;
