import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { SvgIconProps } from './SvgIcon.types';

const CustomSvg = styled(SVG)`
  width: ${props => props.width || 16}px;
  height: ${props => props.height || 16}px;
  max-width: 100%;
  min-width: ${props => (props.width ? `${props.width}px` : 'auto')};
  flex: 0 0 ${props => props.width || 16}px;
  ${props => (props.fill ? `fill: ${props.theme.colors[props.fill]};` : 'fill: none;')}
  ${props => (props.stroke ? `stroke: ${props.theme.colors[props.stroke]};` : '')}
`;

export const SvgIcon = (props: SvgIconProps) => {
  const { src, width, height, fill, stroke, className, testId } = props;
  const [isIE, setIsIE] = useState(false);

  useEffect(() => {
    const isIE11 = !!window.MSInputMethodContext && !!(document as any).documentMode;
    if (isIE11) {
      setIsIE(true);
    }
  }, []);

  if (isIE) {
    return <CustomSvg data-testid={testId} as="img" src={src} width={width} height={height} stroke={stroke} alt="Icon" className={className} />;
  }

  return <CustomSvg data-testid={testId} src={src} width={width} height={height} fill={fill} stroke={stroke} className={className} />;
};

export default SvgIcon;
