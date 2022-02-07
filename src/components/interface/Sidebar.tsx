import styled from "styled-components";
import { useState } from "react";

import { getTheme } from "../../styles/theme";

import { FilledCircle, Icon } from '../base/Icon';
import { Text } from "../base/Text";

import { moneySignIcon, chartIcon, arrowChevronRightDarkIcon, puzzlePieceIcon, diamondIcon, spiralIcon, pizzaSliceQuarter, padlockIcon, donutGraphIcon } from "../../styles/icons";
import { Flex } from '../base/Flex';

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
    subItem: (props as any).subItem ? true : false
}))`
    height: 3rem;
    padding: ${props => props.subItem ? "0 1rem" : "1rem"};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
    active?: boolean,
    subItems?: SidebarSubItemProps[]
}

function SidebarItem({ iconSrc, title, active, subItems }: SidebarItemProps) {
    const [hover, setHover] = useState(false);

    return <>
        <SidebarItemWrapper active={active} hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Icon src={iconSrc} color={active ? "primary" : "background"} shade={active ? "main" : "dark"} />
            <Flex grow>
                <Text variant="default">{title}</Text>
            </Flex>
            <Flex justify-content="flex-end">
                <Icon src={arrowChevronRightDarkIcon} noCircle />
            </Flex>
        </SidebarItemWrapper>
        {
            subItems?.map((subItem, key) =>
                <SidebarSubItem {...subItem} key={key} />
            )
        }
    </>
}

interface SidebarSubItemProps {
    title: string,
}

function SidebarSubItem({ title }: SidebarSubItemProps) {
    const [hover, setHover] = useState(false);
    return <>
        <SidebarItemWrapper subItem hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <FilledCircle color="primary" size={0.5} style={{ marginLeft: "1rem" }} />
            <Flex grow>
                <Text variant="default">{title}</Text>
            </Flex>
            <Flex justify-content="flex-end">
                <Icon src={arrowChevronRightDarkIcon} noCircle />
            </Flex>
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
        active: true,
        subItems: [
            { title: "Ação" },
            { title: "Fundo" },
            { title: "Fundo Imobiliário" },
            { title: "Fundo Renda Fixa" },
        ]
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