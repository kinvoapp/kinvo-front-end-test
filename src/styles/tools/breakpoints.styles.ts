import { math } from 'polished';

const breakpoints = ['768px', '1024px', '1200px', '1440px'];

export const device = {
  mobile: `@media screen and (max-width: ${math(`${breakpoints[0]} - 1px`)})`,
  mobileSmall: `@media screen and (max-width: 360px)`,
  tablet: `@media screen and (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
  desktop: `@media screen and (min-width: ${math(`${breakpoints[1]} + 1px`)})`,
  desktopLarge: `@media screen and (min-width: ${math(`${breakpoints[3]} + 1px`)})`,
};
