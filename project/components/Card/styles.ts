import styled, { CSSProperties } from "styled-components";

type ContainerVariants = "normal" | "outline";
type ContainerStyles = {
  background?: CSSProperties["background"];
  border: CSSProperties["border"];
};

const containerStyles = {
  normal: {
    background: "#FFFFFF",
    border: "none",
  },
  outline: {
    background: "transparent",
    border: "1px solid #DAE0E3",
  },
} as Record<ContainerVariants, ContainerStyles>;

type ContainerProps = {
  height?: CSSProperties["height"];
  margin?: CSSProperties["margin"];
  minHeight?: CSSProperties["minHeight"];
  padding?: CSSProperties["padding"];
  width?: CSSProperties["width"];
  background?: CSSProperties["background"];
  variant?: ContainerVariants;
};

export const Container = styled.div<ContainerProps>`
  background: ${(p) =>
    p.background ?? containerStyles[p.variant ?? "normal"].background};
  box-shadow: 0 2px 20px #0000000d;
  border-radius: 10px;

  margin: ${(p) => p.margin ?? 0}px;
  min-height: ${(p) => (p.minHeight ? p.minHeight : "unset")};
  height: ${(p) => (p.height ? p.height : "auto")};
  padding: ${(p) => p.padding ?? "8px"};
  width: ${(p) => (p.width ? p.width : "auto")};
  border: ${(p) => containerStyles[p.variant ?? "normal"].border};

  overflow: hidden;
`;
