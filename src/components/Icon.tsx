import Image from "next/image";

import styled from "styled-components";

import { getTheme, ColorName, ColorShade } from "../styles/theme";

export interface IconProps {
  src: any;
  color?: ColorName;
  shade?: ColorShade;
  size?: number;
  alt?: string;
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
  padding: 0.5rem;
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

const IconSvg = styled(Image)`
  width: 100%;
  height: 100%;
`

export function Icon({ src, color, shade = "main", size = 1.5, alt = "" }: IconProps) {

  return (
    <>
      <FilledCircle color={color} size={size} shade={shade} >
        {src ? <IconSvg src={src} alt={alt} /> : null}
      </FilledCircle>
    </>
  );
}
