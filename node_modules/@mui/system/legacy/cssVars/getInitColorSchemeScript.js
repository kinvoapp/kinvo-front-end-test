import * as React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export var DEFAULT_MODE_STORAGE_KEY = 'mode';
export var DEFAULT_COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
export var DEFAULT_ATTRIBUTE = 'data-color-scheme';
export default function getInitColorSchemeScript(options) {
  var _ref = options || {},
      _ref$enableColorSchem = _ref.enableColorScheme,
      enableColorScheme = _ref$enableColorSchem === void 0 ? true : _ref$enableColorSchem,
      _ref$enableSystem = _ref.enableSystem,
      enableSystem = _ref$enableSystem === void 0 ? false : _ref$enableSystem,
      _ref$defaultLightColo = _ref.defaultLightColorScheme,
      defaultLightColorScheme = _ref$defaultLightColo === void 0 ? 'light' : _ref$defaultLightColo,
      _ref$defaultDarkColor = _ref.defaultDarkColorScheme,
      defaultDarkColorScheme = _ref$defaultDarkColor === void 0 ? 'dark' : _ref$defaultDarkColor,
      _ref$modeStorageKey = _ref.modeStorageKey,
      modeStorageKey = _ref$modeStorageKey === void 0 ? DEFAULT_MODE_STORAGE_KEY : _ref$modeStorageKey,
      _ref$colorSchemeStora = _ref.colorSchemeStorageKey,
      colorSchemeStorageKey = _ref$colorSchemeStora === void 0 ? DEFAULT_COLOR_SCHEME_STORAGE_KEY : _ref$colorSchemeStora,
      _ref$attribute = _ref.attribute,
      attribute = _ref$attribute === void 0 ? DEFAULT_ATTRIBUTE : _ref$attribute,
      _ref$colorSchemeNode = _ref.colorSchemeNode,
      colorSchemeNode = _ref$colorSchemeNode === void 0 ? 'document.documentElement' : _ref$colorSchemeNode;

  return /*#__PURE__*/_jsx("script", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: "(function() { try {\n        var mode = localStorage.getItem('".concat(modeStorageKey, "');\n        var cssColorScheme = mode;\n        var colorScheme = '';\n        if (mode === 'system' || (!mode && !!").concat(enableSystem, ")) {\n          // handle system mode\n          var mql = window.matchMedia('(prefers-color-scheme: dark)');\n          if (mql.matches) {\n            cssColorScheme = 'dark';\n            colorScheme = localStorage.getItem('").concat(colorSchemeStorageKey, "-dark') || '").concat(defaultDarkColorScheme, "';\n          } else {\n            cssColorScheme = 'light';\n            colorScheme = localStorage.getItem('").concat(colorSchemeStorageKey, "-light') || '").concat(defaultLightColorScheme, "';\n          }\n        }\n        if (mode === 'light') {\n          colorScheme = localStorage.getItem('").concat(colorSchemeStorageKey, "-light') || '").concat(defaultLightColorScheme, "';\n        }\n        if (mode === 'dark') {\n          colorScheme = localStorage.getItem('").concat(colorSchemeStorageKey, "-dark') || '").concat(defaultDarkColorScheme, "';\n        }\n        if (colorScheme) {\n          ").concat(colorSchemeNode, ".setAttribute('").concat(attribute, "', colorScheme);\n        }\n        if (").concat(enableColorScheme, " && !!cssColorScheme) {\n          ").concat(colorSchemeNode, ".style.setProperty('color-scheme', cssColorScheme);\n        }\n      } catch (e) {} })();")
    }
  });
}