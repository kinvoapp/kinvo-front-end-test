import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
	flex-shrink: 0;
	flex-basis: 16%;
`;

interface NavProps {
	linksList: {
		groupLabel: string;
		links: {
			label: string;
			url: string;
		}[];
	}[];
}

const Nav: FC<NavProps> = function ({ linksList }) {
	return (
		<NavWrapper>
			{linksList.map(({ groupLabel, links }, listIndex) => (
				<div key={listIndex}>
					<button>{groupLabel}</button>
					<ul>
						{links.map(({ label, url }, linksIndex) => (
							<li key={linksIndex}>
								<Link to={url}>{label}</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</NavWrapper>
	);
};

export default Nav;
