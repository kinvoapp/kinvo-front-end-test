import styled from "styled-components";

import { getTheme } from "../styles/theme";

import { Icon } from './Icon';
import { Text } from "./Text";

import { moneySignIcon, chartIcon, arrowChevronRightDarkIcon, puzzlePieceIcon, diamondIcon, spiralIcon, pizzaSliceQuarter, padlockIcon, donutGraphIcon } from "../styles/icons";

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
  align-items: stretch;
  width: 14rem;
  background-color: ${props => getTheme(props).background.lighter};
`;

const SidebarItemWrapper = styled.div`
    height: 3rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.5rem;
    border-bottom: ${props => getTheme(props).background.main} solid 2px;
`;

interface SidebarItemProps {
    iconSrc: any,
    title: string
}

function SidebarItem({ iconSrc, title }: SidebarItemProps) {
    return <>
        <SidebarItemWrapper>
            <Icon src={iconSrc} color="background" shade="dark" />
            <Text style={{ fontSize: "0.8rem", fontWeight: 500 }}>{title}</Text>
            <div style={{ justifySelf: 'flex-end' }}>
                <Icon src={arrowChevronRightDarkIcon} />
            </div>

        </SidebarItemWrapper>
    </>
}

const menu: SidebarItemProps[] = [
    {
        title: "Resumo da Carteira",
        iconSrc: spiralIcon,
    },
    {
        title: "Meus Produtos",
        iconSrc: pizzaSliceQuarter,
    },
    {
        title: "Meus Proventos",
        iconSrc: moneySignIcon,
    },
    {
        title: "Classe de Ativos",
        iconSrc: puzzlePieceIcon,
    },
    {
        title: "Rentabilidade Real",
        iconSrc: diamondIcon,
    },
    {
        title: "Projeção da Carteira",
        iconSrc: chartIcon,
    },
    {
        title: "Risco x Retorno",
        iconSrc: donutGraphIcon,
    },
    {
        title: "Cobertura do FGC",
        iconSrc: padlockIcon,
    },
];

export function Sidebar() {
    return (<>
        <SidebarWrapper>
            {menu.map((item, index) => <SidebarItem {...item} key={index} />)}
        </SidebarWrapper>
    </>);
}