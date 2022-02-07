import { HTMLAttributes } from "react";

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "stretch";

type AlignItems = JustifyContent | "baseline";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  justify?: JustifyContent;
  justifySelf?: JustifyContent | "auto";
  align?: AlignItems;
  alignSelf?: AlignItems | "auto";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "wrap" | "nowrap" | "wrap-reverse" | boolean;
  grow?: number | string | boolean;
  shrink?: number | string | boolean;

  gap?: number;

  margin?: number;
  marginX?: number;
  marginY?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;

  padding?: number;
  paddingX?: number;
  paddingY?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;

  position?: "static" | "absolute" | "relative" | "fixed" | "sticky";
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;

  children?: React.ReactNode;
}

export function Flex({
  justify,
  justifySelf,
  align,
  alignSelf,
  direction,
  wrap,
  grow,
  shrink,
  gap,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  position,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  style,
  children,
}: FlexProps) {
  return (
    <div
      style={{
        display: "flex",

        justifyContent: justify,
        justifySelf,
        alignItems: align,
        alignSelf,
        flexDirection: direction,
        flexWrap:
          wrap === true ? "wrap" : wrap === false ? "nowrap" : wrap,
        flexGrow: number(grow),
        flexShrink: number(shrink),

        marginTop: spacing(marginTop ?? marginY ?? margin ?? 0),
        marginRight: spacing(marginRight ?? marginX ?? margin ?? 0),
        marginBottom: spacing(marginBottom ?? marginY ?? margin ?? 0),
        marginLeft: spacing(marginLeft ?? marginX ?? margin ?? 0),

        paddingTop: spacing(paddingTop ?? paddingY ?? padding ?? 0),
        paddingRight: spacing(
          paddingRight ?? paddingX ?? padding ?? 0,
        ),
        paddingBottom: spacing(
          paddingBottom ?? paddingY ?? padding ?? 0,
        ),
        paddingLeft: spacing(paddingLeft ?? paddingX ?? padding ?? 0),

        gap: spacing(gap ?? 0),

        position,

        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,

        ...style,
      }}
    >
      {children}
    </div>
  );
}

function spacing(units = 0) {
  return `${units}rem`;
}

function number(
  value?: string | number | boolean,
): number | undefined {
  switch (typeof value) {
    case "number":
      return value;
    case "string":
      const parsed = parseFloat(value);
      return !isNaN(parsed) ? parsed : undefined;
    case "boolean":
      return value ? 1 : 0;
    default:
      return undefined;
  }
}
