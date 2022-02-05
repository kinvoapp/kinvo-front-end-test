import Image from "next/image";

import styled from "styled-components";

import { getTheme, ColorName } from "../styles/theme";

export interface IconProps {
  src: any;
  color?: ColorName;
  size?: number;
  alt?: string;
}

export const FilledCircle = styled.div.attrs(props => ({
  size: ((props as any).size ?? 1) as number,
  color: (props.color ?? "primary") as ColorName,
}))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.size || 1}rem;
  height: ${props => props.size || 1}rem;
  padding: 0.5rem;
  border-radius: 100%;
  background-color: ${(props) => getTheme(props)[props.color].main};
`;

const IconSvg = styled(Image)`
  width: 100%;
  height: 100%;
`

export function Icon({ src, color = "primary", size = 1, alt = "" }: IconProps) {

  return (
    <>
      <FilledCircle color={color} size={size}>
        {src ? <IconSvg src={src} alt={alt} /> : null}
      </FilledCircle>
    </>
  );
}
