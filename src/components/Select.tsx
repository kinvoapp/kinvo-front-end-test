import styled from "styled-components"
import { getTheme } from "../styles/theme"
import { HTMLAttributes } from "react"

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.75rem;
    border: solid 2px ${props => getTheme(props).background.main};
`

const SelectElement = styled.select`
    border: none;
    font-family: "Montserrat";

    &:focus {
        outline: none;
    }
`

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
    value?: string,
    children?: React.ReactNode
}

export function Select({children, ...selectProps}: SelectProps) {
    return (<>
        <SelectWrapper>
            <SelectElement {...selectProps}>
                { children }
            </SelectElement>
        </SelectWrapper>
    </>)
}