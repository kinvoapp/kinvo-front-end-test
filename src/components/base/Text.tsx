import styled from "styled-components";
import { getTheme, ColorName, ColorShade } from '../../styles/theme';
import { TextVariant, textVariants } from '../../styles/typography';

export const Text = styled.span.attrs(props => ({
    color: (props.color ?? "text") as ColorName,
    shade: ((props as any).shade ?? "main") as ColorShade,
    selectable: (props as any).selectable ? true : false,
    variant: ((props as any).variant ?? "default") as TextVariant|TextVariant[]
}))`
    color: ${(props) => getTheme(props)[props.color][props.shade]};
    user-select: ${(props) => props.selectable ? "text" : "none"};

    ${(props) => props.variant instanceof Array ? props.variant.map(variant => textVariants[variant]) : props.variant ? textVariants[props.variant] : ""}
`