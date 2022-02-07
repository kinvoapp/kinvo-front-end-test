import styled from "styled-components";

export const SideMenuContainer = styled.aside`
	position: sticky;
	top: 95px;

	width: fit-content;
	max-width: 250px;
	height: 100%;

	background-color: #fff;
`;

export const SideMenuNav = styled.nav`
	color: #707b81;
	font-size: 1.3rem;
	line-height: 1.6rem;
	text-align: left;
`;

export const MenuItem = styled.a<{ active?: boolean }>`
	position: relative;

	min-width: 22rem;

	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;

	padding: 1.5rem;

	border-bottom: 1px solid rgba(204, 207, 209, 0.35);
	cursor: pointer;

	background-color: ${(props) => (props.active ? "#f8fafb" : "#fff")};

	p {
		max-width: 7.5rem;
	}

	&::after {
		content: "";
		position: absolute;
		right: 20px;
		top: 50%;

		width: 6px;
		height: 10px;

		transform: translateY(-50%);

		background-size: 100%;
		background-position: center center;
		background-repeat: no-repeat;
		background-image: url(/arrowRight.svg);
	}
`;

export const IconBox = styled.div<{ active?: boolean }>`
	width: 34px;
	height: 34px;

	justify-content: center;
	align-items: center;

	margin: 0;
	padding: 0.8rem;

	border-radius: 50px;

	background-color: ${(props) => (props.active ? "#4C309B" : "#dae1e2")};
`;

export const Icon = styled.img`
	width: 18px;
	height: 18px;
`;

export const SubItem = styled.li<{ active?: boolean }>`
	position: relative;

	padding: 1.5rem 1.5rem 1.5rem 4rem;
	border-bottom: 1px solid rgba(204, 207, 209, 0.35);

	background-color: ${(props) => (props.active ? "#f8fafb" : "#fff")};

	&::after {
		content: "";
		position: absolute;
		right: 20px;
		top: 50%;

		width: 6px;
		height: 10px;

		transform: translateY(-50%);

		background-size: 100%;
		background-position: center center;
		background-repeat: no-repeat;
		background-image: url(/arrowRight.svg);
	}

	&::before {
		content: "•";
		position: absolute;
		top: 25%;
		left: 15px;

		color: #4c309b;
		font-size: 4rem;
	}
`;

export const Dropdown = styled.div<{ showDropdown?: boolean }>`
	ul {
		display: ${(props) => (props.showDropdown ? "flex" : "none")};
		flex-direction: column;
	}
`;
