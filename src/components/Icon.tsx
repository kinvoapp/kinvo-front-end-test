import Image from "next/image";

import styled from "styled-components";

import { getTheme, ColorName, ColorShade } from "../styles/theme";

export interface IconProps {
  src: any;
  color?: ColorName;
  shade?: ColorShade;
  size?: number;
  alt?: string;
  button?: boolean;
  noCircle?: boolean;
}

export const FilledCircle = styled.div.attrs(props => ({
  size: ((props as any).size ?? 1) as number,
  color: (props.color) as ColorName,
  shade: ((props as any).shade ?? "main") as ColorShade,
  button: (props as any).button ? true : false
}))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.size || 1}rem;
  min-width: ${props => props.size || 1}rem;
  height: ${props => props.size || 1}rem;
  min-height: ${props => props.size || 1}rem;
  border-radius: 100%;
  background-color: ${(props) => {
    try {
      return getTheme(props)[props.color][props.shade] ?? "transparent";
    } catch (e) {
      return "transparent";
    }
  }};
  cursor: ${props => props.button ? "pointer" : "default"};
`;

const IconWrapper = styled.div.attrs(props => ({
  size: ((props as any).size ?? 1) as number,
  button: (props as any).button ? true : false
}))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.size || 1}rem;
  min-width: ${props => props.size || 1}rem;
  height: ${props => props.size || 1}rem;
  min-height: ${props => props.size || 1}rem;

  ${props => props.button ? "cursor: pointer;" : ""}
`;

const IconSvg = styled(Image)`
  width: 100%;
  height: 100%;
`

export function Icon({ src, color, shade = "main", size = 1.5, alt = "", button = false, noCircle = false }: IconProps) {
  const icon = src ? <IconSvg src={src} alt={alt} /> : null;

  return (
    <>
      {noCircle ? <IconWrapper size={size} button={button} >
        {icon}
      </IconWrapper> : <FilledCircle color={color} shade={shade} size={size} button={button} style={{ padding: "0.5rem" }}>
        {icon}
      </FilledCircle>}
    </>
  );
}
