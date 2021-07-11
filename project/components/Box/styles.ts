import styled, { CSSProperties } from "styled-components";

type ContainerProps = {
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  flexDirection?: CSSProperties["flexDirection"];
  flexGrow?: CSSProperties["flexGrow"];
  flexShrink?: CSSProperties["flexShrink"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  flexBasis?: CSSProperties["flexBasis"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
};

export const Container = styled.div<ContainerProps>`
  display: flex;

  ${(p) => p.margin && `margin: ${p.margin}`};
  ${(p) => p.padding && `padding: ${p.padding}`};
  ${(p) => p.flexDirection && `flex-direction: ${p.flexDirection}`};
  ${(p) => p.flexGrow && `flex-grow: ${p.flexGrow}`};
  ${(p) => p.flexShrink && `flex-shrink: ${p.flexShrink}`};
  ${(p) => p.alignItems && `align-items: ${p.alignItems}`};
  ${(p) => p.justifyContent && `justify-content: ${p.justifyContent}`};
  ${(p) => p.flexBasis && `flex-basis: ${p.flexBasis}`};

  ${(p) => p.width && `width: ${p.width}`};
  ${(p) => p.height && `height: ${p.height}`};
`;
