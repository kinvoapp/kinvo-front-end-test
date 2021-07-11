import styled, { CSSProperties } from "styled-components";

type TextVariants = "tinted" | "normal";
type TextStyles = {
  fontSize?: number;
  fontWeight?: CSSProperties["fontWeight"];
  color?: string;
  textTransform?: CSSProperties["textTransform"];
  margin?: CSSProperties["margin"];
};

const textStyles = {
  normal: {
    fontSize: 9,
    color: "#4E5B61",
    fontWeight: 500,
  },
  tinted: {
    fontSize: 14,
    color: "#4C309B",
    fontWeight: 700,
  },
} as Partial<Record<TextVariants, TextStyles>>;

type StyledTextProps = TextStyles & {
  variant?: TextVariants;
};

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${(p) =>
    p.fontSize ?? textStyles[p.variant ?? "normal"]?.fontSize}px;
  color: ${(p) => p.color ?? textStyles[p.variant ?? "normal"]?.color};
  font-weight: ${(p) =>
    p.fontWeight ?? textStyles[p.variant ?? "normal"]?.fontWeight};
  text-transform: ${(p) => p.textTransform ?? "normal"};
  margin: ${(p) => p.margin ?? "4px 0"};
`;

type TitleVariants = `h${1 | 2 | 3 | 4 | 5 | 6}`;
type TitleStyles = {
  fontSize?: number;
  fontWeight?: CSSProperties["fontWeight"];
  color?: string;
};

const titleStyles = {
  h1: {
    fontSize: 20,
    color: "#4C309B",
    fontWeight: 700,
  },
  h2: {
    fontSize: 18,
    color: "#627179",
    fontWeight: 500,
  },
} as Partial<Record<TitleVariants, TitleStyles>>;

type StyledTitleProps = TitleStyles & {
  variant?: TitleVariants;
};

export const StyledTitle = styled.h1<StyledTitleProps>`
  font-size: ${(p) => p.fontSize ?? titleStyles[p.variant ?? "h1"]?.fontSize}px;
  color: ${(p) => p.color ?? titleStyles[p.variant ?? "h1"]?.color};
  font-weight: ${(p) =>
    p.fontWeight ?? titleStyles[p.variant ?? "h1"]?.fontWeight};
  margin: 10px 0;
`;
