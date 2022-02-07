import styled from "styled-components";

export const SideMenuContainer = styled.aside`
	width: fit-content;
	max-width: 250px;
	background-color: #fff;
	height: 100%;
	position: sticky;
	top: 95px;
`;

export const SideMenuNav = styled.nav`
	color: #707b81;
	font-size: 1.3rem;
	line-height: 1.6rem;
	text-align: left;
`;

export const MenuItem = styled.a<{ active?: boolean }>`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	padding: 1.5rem;
	position: relative;
	border-bottom: 1px solid rgba(204, 207, 209, 0.35);
	min-width: 22rem;
	cursor: pointer;
	background-color: ${(props) => (props.active ? "#f8fafb" : "#fff")};

	p {
		max-width: 7.5rem;
	}

	&::after {
		content: "";
		position: absolute;
		width: 6px;
		height: 10px;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		background-size: 100%;
		background-position: center center;
		background-repeat: no-repeat;
		background-image: url(/arrowRight.svg);
	}
`;

export const IconBox = styled.div<{ active?: boolean }>`
	background-color: ${(props) => (props.active ? "#4C309B" : "#dae1e2")};
	border-radius: 50px;
	padding: 0.8rem;
	justify-content: center;
	align-items: center;
	width: 34px;
	margin: 0;
	height: 34px;
`;

export const Icon = styled.img`
	width: 18px;
	height: 18px;
`;

export const SubItem = styled.li<{ active?: boolean }>`
	padding: 1.5rem 1.5rem 1.5rem 4rem;
	position: relative;
	background-color: ${(props) => (props.active ? "#f8fafb" : "#fff")};
	border-bottom: 1px solid rgba(204, 207, 209, 0.35);

	&::after {
		content: "";
		position: absolute;
		width: 6px;
		height: 10px;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		background-size: 100%;
		background-position: center center;
		background-repeat: no-repeat;
		background-image: url(/arrowRight.svg);
	}

	&::before {
		content: "•";
		color: #4c309b;
		font-size: 4rem;
		position: absolute;
		top: 25%;
		left: 15px;
	}
`;

export const Dropdown = styled.div<{ showDropdown?: boolean }>`
	ul {
		display: ${(props) => (props.showDropdown ? "flex" : "none")};
		flex-direction: column;
	}
`;
