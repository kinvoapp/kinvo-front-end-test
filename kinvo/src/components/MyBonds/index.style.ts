import styled from "styled-components";

export const MyBondsContainer = styled.section`
	padding: 20px;

	& > div:first-child {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0px 2px 20px #0000000d;

		& > div:nth-child(2n + 3) {
			background-color: #f8fafb;
		}

		& > div:last-child {
			border-radius: 0 0 10px 10px;
		}
	}
`;

export const MyBondsSurface = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;

	div {
		position: relative;
		padding: 2.5rem 2.5rem 0.5rem;
		display: flex;
		gap: 2rem;

		&:before {
			content: "";
			position: absolute;
			top: 67%;
			left: 290px;
			transform: translateY(-55%);
			width: 15.15px;
			height: 15.15px;
			background-size: 100%;
			background-image: url(/searchIcon.svg);
		}
	}

	input,
	select {
		height: 38px;
		line-height: 30px;
		border: 1px solid rgb(214, 217, 221);
		border-radius: 10px;
		padding-left: 40px;
		width: 100%;
		padding-right: 10px;
		background-color: white;
		color: rgb(112, 123, 129);
		transition: border 0.15s ease 0s;

		&:focus {
			outline: none;
			border-color: rgb(165, 231, 244);
			box-shadow: rgb(218 224 227 / 55%) 2px 2px 5px;
		}
	}

	select {
		padding-left: 10px;
	}
`;

export const BondContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1.25fr 0.75fr;
	width: 100%;
	padding: 20px;
	gap: 10px;
	border-top: 1px solid #eef2f4;
	border-bottom: 1px solid #eef2f4;

	small {
		font-weight: 500;
		font-size: 9px;
		line-height: 11px;
		color: #4e5b61;
	}

	p {
		color: #4e5b61;
		font-weight: 500;
		font-size: 1.2rem;
		line-height: 1.8rem;
		max-width: 16rem;
	}

	h4 {
		color: #8a51ba;
		font-size: 14px;
		line-height: 18px;
		font-weight: 500;
	}
`;

export const BondBox = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	border-radius: 10px;
	gap: 7px;
	flex-direction: column;
	border: 1px solid #dae0e3;
`;

export const BondTitle = styled.div`
	display: flex;
	height: fit-content;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;

	img {
		padding: 0;
	}
`;

export const BondDetail = styled.div<{ h3Color?: string }>`
	display: flex;
	justify-content: space-between;
	gap: 10px;

	div {
		display: flex;
		flex-direction: column;
		gap: 7px;

		h3 {
			font-size: 1.6rem;
			font-weight: 500;
			line-height: 2.4rem;
			color: ${(props) => props.h3Color};
		}
	}
`;
