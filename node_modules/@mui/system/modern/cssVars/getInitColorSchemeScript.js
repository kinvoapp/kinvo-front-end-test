import * as React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export const DEFAULT_MODE_STORAGE_KEY = 'mode';
export const DEFAULT_COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
export const DEFAULT_ATTRIBUTE = 'data-color-scheme';
export default function getInitColorSchemeScript(options) {
  const {
    enableColorScheme = true,
    enableSystem = false,
    defaultLightColorScheme = 'light',
    defaultDarkColorScheme = 'dark',
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    attribute = DEFAULT_ATTRIBUTE,
    colorSchemeNode = 'document.documentElement'
  } = options || {};
  return /*#__PURE__*/_jsx("script", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: `(function() { try {
        var mode = localStorage.getItem('${modeStorageKey}');
        var cssColorScheme = mode;
        var colorScheme = '';
        if (mode === 'system' || (!mode && !!${enableSystem})) {
          // handle system mode
          var mql = window.matchMedia('(prefers-color-scheme: dark)');
          if (mql.matches) {
            cssColorScheme = 'dark';
            colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
          } else {
            cssColorScheme = 'light';
            colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
          }
        }
        if (mode === 'light') {
          colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
        }
        if (mode === 'dark') {
          colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
        }
        if (colorScheme) {
          ${colorSchemeNode}.setAttribute('${attribute}', colorScheme);
        }
        if (${enableColorScheme} && !!cssColorScheme) {
          ${colorSchemeNode}.style.setProperty('color-scheme', cssColorScheme);
        }
      } catch (e) {} })();`
    }
  });
}