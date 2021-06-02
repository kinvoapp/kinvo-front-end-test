import { ColorsType } from '../../styles/theme/colors';

export interface SvgIconProps {
  src: string;
  width?: number;
  height?: number;
  fill?: ColorsType;
  stroke?: ColorsType;
  className?: string;
  testId?: string;
}
