import { createGlobalStyle } from 'styled-components';

import { fonts } from '@styles/generic/typography.styles';
import { genericBoxSizing } from './generic/boxSizing.styles';
import { genericReset } from './generic/reset.styles';
import { genericShared } from './generic/shared.styles';

const style = document.createElement('style');
style.textContent = `
    ${fonts.montserrat
      .map(
        montserratFont => `
        @font-face {
            font-family: Montserrat;
            font-style: normal;
            font-weight: ${montserratFont.weight};
            font-display: swap;
            src: url(${montserratFont.font}) format("woff2");
        }`,
      )
      .join('')}
`;

const GlobalStyle = createGlobalStyle(genericReset, genericBoxSizing, genericShared);

document.head.appendChild(style);

export default GlobalStyle;
