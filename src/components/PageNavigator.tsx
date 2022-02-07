import { useState, useEffect } from 'react';
import styled from "styled-components";
import { arrowChevronLeftDarkIcon, arrowChevronRightDarkIcon } from '../styles/icons';
import { getTheme } from "../styles/theme";
import { Flex } from './Flex';
import { Icon } from './Icon';

const PageButton = styled.div.attrs(props => ({
    disabled: (props as any).disabled ? true : false,
    active: (props as any).active ? true : false
}))`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 2rem;

    border: solid 2px ${props => getTheme(props).background.main};
    border-radius: 0.25rem;
    background-color: ${props => props.active || props.disabled ? getTheme(props).background.dark : getTheme(props).background.lightest};
    color: ${props => props.active || props.disabled ? getTheme(props).background.lightest : getTheme(props).background.dark};
    cursor: ${props => props.disabled || props.active ? "default" : "pointer"};
    pointer-events: ${props => props.disabled || props.active ? "none" : "all"};

    box-shadow: 0px 2px 20px #0000000D;
`

interface PageNavigatorProps {
    initialPage?: number,
    pages: number,
    onChange: (event: { page: number }) => void
}

export function PageNavigator({ initialPage = 1, pages, onChange }: PageNavigatorProps) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        onChange({ page: currentPage });
    }, [currentPage, onChange]);

    function prevPage() {
        let newPage = currentPage - 1;
        if (newPage < 1) newPage = 1;
        setCurrentPage(newPage);
    }

    function nextPage() {
        let newPage = currentPage + 1;
        if (newPage > pages) newPage = pages;
        setCurrentPage(newPage);
    }

    return (<>
        <Flex direction="row" justify="center" gap={0.5}>
            <PageButton onClick={() => prevPage()}  disabled={currentPage <= 1}>
                <Icon src={arrowChevronLeftDarkIcon} noCircle />
            </PageButton>
            {new Array(pages).fill(null).map((item, index) =>
                <PageButton active={currentPage === index + 1} onClick={() => setCurrentPage(index + 1)} key={index}>{index + 1}</PageButton>)
            }
            <PageButton onClick={() => nextPage()} disabled={currentPage >= pages}>
                <Icon src={arrowChevronRightDarkIcon} noCircle />
            </PageButton>
        </Flex>
    </>)
}