import { useState, useEffect } from "react";
import { db } from "../../services/api";
import * as S from "./index.style";

interface MenuItem {
	label: string;
	icon: string;
	route: string;
}

export const SideMenu = () => {
	const [menuItems, setMenuItems] = useState<MenuItem[] | undefined>();
	const [activeTab, setActiveTab] = useState<number>(3);
	const [dropdown, setDropdown] = useState<boolean>(true);
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await db.get("sideMenu");
			setMenuItems(data);
			console.log(data);
		};

		fetchData();
	}, []);

	console.log(menuItems);

	return (
		<S.SideMenuContainer>
			<S.SideMenuNav>
				{menuItems?.map((item, i) => {
					return item.route ? (
						<S.MenuItem
							key={i}
							href={item.route}
							onClick={() => setActiveTab(i)}
							active={activeTab === i ? true : false}
						>
							<S.IconBox active={activeTab === i ? true : false}>
								<S.Icon src={item.icon} alt={item.label} />
							</S.IconBox>
							<p>{item.label}</p>
						</S.MenuItem>
					) : (
						<S.Dropdown
							key={i}
							showDropdown={dropdown}
							onClick={() => setDropdown(!dropdown)}
						>
							<S.MenuItem
								onClick={() => setActiveTab(i)}
								active={activeTab === i ? true : false}
							>
								<S.IconBox active={activeTab === i ? true : false}>
									<S.Icon src={item.icon} alt={item.label} />
								</S.IconBox>
								<p>{item.label}</p>
							</S.MenuItem>
							<ul>
								<S.SubItem>Ações</S.SubItem>
								<S.SubItem>Fundos Imobiliários</S.SubItem>
								<S.SubItem>Fundos</S.SubItem>
								<S.SubItem active>Renda Fixa</S.SubItem>
							</ul>
						</S.Dropdown>
					);
				})}
			</S.SideMenuNav>
		</S.SideMenuContainer>
	);
};
