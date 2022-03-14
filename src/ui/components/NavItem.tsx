import { FC } from "react";

export interface NavItemProps {
	label: string;
	items: string;
}

const NavItem: FC<NavItemProps> = function ({ label, items }) {
	return (
		<div>
			<button>{label}</button>
			{items}
		</div>
	);
};

export default NavItem;
