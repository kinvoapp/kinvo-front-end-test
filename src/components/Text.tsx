import styled from "styled-components";
import { getTheme, ColorName, ColorShade } from '../styles/theme';

export const Text = styled.span.attrs(props => ({
    color: (props.color ?? "text") as ColorName,
    shade: ((props as any).shade ?? "main") as ColorShade,
}))`
    color: ${(props) => getTheme(props)[props.color][props.shade]};
`