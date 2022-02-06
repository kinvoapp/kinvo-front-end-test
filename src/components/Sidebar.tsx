import styled from "styled-components";
import { useState } from "react";

import { getTheme } from "../styles/theme";

import { Icon } from './Icon';
import { Text } from "./Text";

import { moneySignIcon, chartIcon, arrowChevronRightDarkIcon, puzzlePieceIcon, diamondIcon, spiralIcon, pizzaSliceQuarter, padlockIcon, donutGraphIcon } from "../styles/icons";

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
  align-items: stretch;
  width: 16rem;
  background: linear-gradient(to bottom, ${props => getTheme(props).background.lighter}, ${props => getTheme(props).background.lightest} 4rem)
`;

const SidebarItemWrapper = styled.div.attrs(props => ({
    hover: (props as any).hover ? true : false,
    active: (props as any).active ? true : false,
}))`
    height: 3rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 1rem;
    border-bottom: ${props => getTheme(props).background.main} solid 2px;
    background-color: ${props => props.hover || props.active ? getTheme(props).background.light : "transparent"};
    cursor: ${props => props.active ? "default" : "pointer"};
    transition: background-color 0.2s;
`;

interface SidebarItemProps {
    iconSrc: any,
    title: string,
    active?: boolean
}

function SidebarItem({ iconSrc, title, active }: SidebarItemProps) {
    const [hover, setHover] = useState(false);

    return <>
        <SidebarItemWrapper active={active} hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Icon src={iconSrc} color={active ? "primary" : "background"} shade={active ? "main" : "dark"} />
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
        active: true
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