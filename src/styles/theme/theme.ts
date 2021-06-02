import { Colors } from '@styles/theme/colors';
import { rgba } from 'polished';
import { fontMontserrat } from './fonts.theme';
import { Theme } from './theme.types';

export const theme: Theme = {
  colors: Colors,
  space: [0, 8, 16, 32, 48, 64, 92],
  fontSizes: ['1rem', '1.2rem', '1.4rem', '1.6rem', '1.9rem', '2.4rem', '3rem'],
  global: {
    defaultFont: fontMontserrat,
    secondaryFont: fontMontserrat,
    gutterSpace: 16,
    headerSize: 48,
    defaultShadow: `0px 2px 6px ${rgba(Colors.grey700, 0.3)}`,
  },
};
