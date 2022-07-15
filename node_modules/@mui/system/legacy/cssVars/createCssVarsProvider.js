import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { formatMuiErrorMessage as _formatMuiErrorMessage } from "@mui/utils";
import * as React from 'react';
import PropTypes from 'prop-types';
import { deepmerge, unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
import { GlobalStyles } from '@mui/styled-engine';
import cssVarsParser from './cssVarsParser';
import ThemeProvider from '../ThemeProvider';
import systemGetInitColorSchemeScript, { DEFAULT_ATTRIBUTE, DEFAULT_COLOR_SCHEME_STORAGE_KEY, DEFAULT_MODE_STORAGE_KEY } from './getInitColorSchemeScript';
import useCurrentColorScheme from './useCurrentColorScheme';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var DISABLE_CSS_TRANSITION = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
export default function createCssVarsProvider(options) {
  var _options$theme = options.theme,
      defaultTheme = _options$theme === void 0 ? {} : _options$theme,
      _options$attribute = options.attribute,
      defaultAttribute = _options$attribute === void 0 ? DEFAULT_ATTRIBUTE : _options$attribute,
      _options$modeStorageK = options.modeStorageKey,
      defaultModeStorageKey = _options$modeStorageK === void 0 ? DEFAULT_MODE_STORAGE_KEY : _options$modeStorageK,
      _options$colorSchemeS = options.colorSchemeStorageKey,
      defaultColorSchemeStorageKey = _options$colorSchemeS === void 0 ? DEFAULT_COLOR_SCHEME_STORAGE_KEY : _options$colorSchemeS,
      _options$defaultMode = options.defaultMode,
      desisgnSystemMode = _options$defaultMode === void 0 ? 'light' : _options$defaultMode,
      designSystemColorScheme = options.defaultColorScheme,
      _options$disableTrans = options.disableTransitionOnChange,
      designSystemTransitionOnChange = _options$disableTrans === void 0 ? false : _options$disableTrans,
      _options$enableColorS = options.enableColorScheme,
      designSystemEnableColorScheme = _options$enableColorS === void 0 ? true : _options$enableColorS,
      designSystemShouldSkipGeneratingVar = options.shouldSkipGeneratingVar,
      resolveTheme = options.resolveTheme;

  if (!defaultTheme.colorSchemes || typeof designSystemColorScheme === 'string' && !defaultTheme.colorSchemes[designSystemColorScheme] || _typeof(designSystemColorScheme) === 'object' && !defaultTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || _typeof(designSystemColorScheme) === 'object' && !defaultTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
    console.error("MUI: `".concat(designSystemColorScheme, "` does not exist in `theme.colorSchemes`."));
  }

  var ColorSchemeContext = /*#__PURE__*/React.createContext(undefined);

  var useColorScheme = function useColorScheme() {
    var value = React.useContext(ColorSchemeContext);

    if (!value) {
      throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `useColorScheme` must be called under <CssVarsProvider />" : _formatMuiErrorMessage(19));
    }

    return value;
  };

  function CssVarsProvider(_ref) {
    var children = _ref.children,
        _ref$theme = _ref.theme,
        themeProp = _ref$theme === void 0 ? defaultTheme : _ref$theme,
        _ref$modeStorageKey = _ref.modeStorageKey,
        modeStorageKey = _ref$modeStorageKey === void 0 ? defaultModeStorageKey : _ref$modeStorageKey,
        _ref$colorSchemeStora = _ref.colorSchemeStorageKey,
        colorSchemeStorageKey = _ref$colorSchemeStora === void 0 ? defaultColorSchemeStorageKey : _ref$colorSchemeStora,
        _ref$attribute = _ref.attribute,
        attribute = _ref$attribute === void 0 ? defaultAttribute : _ref$attribute,
        _ref$defaultMode = _ref.defaultMode,
        defaultMode = _ref$defaultMode === void 0 ? desisgnSystemMode : _ref$defaultMode,
        _ref$defaultColorSche = _ref.defaultColorScheme,
        defaultColorScheme = _ref$defaultColorSche === void 0 ? designSystemColorScheme : _ref$defaultColorSche,
        _ref$disableTransitio = _ref.disableTransitionOnChange,
        disableTransitionOnChange = _ref$disableTransitio === void 0 ? designSystemTransitionOnChange : _ref$disableTransitio,
        _ref$enableColorSchem = _ref.enableColorScheme,
        enableColorScheme = _ref$enableColorSchem === void 0 ? designSystemEnableColorScheme : _ref$enableColorSchem,
        _ref$storageWindow = _ref.storageWindow,
        storageWindow = _ref$storageWindow === void 0 ? typeof window === 'undefined' ? undefined : window : _ref$storageWindow,
        _ref$documentNode = _ref.documentNode,
        documentNode = _ref$documentNode === void 0 ? typeof document === 'undefined' ? undefined : document : _ref$documentNode,
        _ref$colorSchemeNode = _ref.colorSchemeNode,
        colorSchemeNode = _ref$colorSchemeNode === void 0 ? typeof document === 'undefined' ? undefined : document.documentElement : _ref$colorSchemeNode,
        _ref$colorSchemeSelec = _ref.colorSchemeSelector,
        colorSchemeSelector = _ref$colorSchemeSelec === void 0 ? ':root' : _ref$colorSchemeSelec,
        _ref$shouldSkipGenera = _ref.shouldSkipGeneratingVar,
        shouldSkipGeneratingVar = _ref$shouldSkipGenera === void 0 ? designSystemShouldSkipGeneratingVar : _ref$shouldSkipGenera;
    var hasMounted = React.useRef(false);

    var _themeProp$colorSchem = themeProp.colorSchemes,
        colorSchemes = _themeProp$colorSchem === void 0 ? {} : _themeProp$colorSchem,
        _themeProp$components = themeProp.components,
        components = _themeProp$components === void 0 ? {} : _themeProp$components,
        cssVarPrefix = themeProp.cssVarPrefix,
        restThemeProp = _objectWithoutProperties(themeProp, ["colorSchemes", "components", "cssVarPrefix"]);

    var allColorSchemes = Object.keys(colorSchemes);
    var defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
    var defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;

    var _useCurrentColorSchem = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme: defaultLightColorScheme,
      defaultDarkColorScheme: defaultDarkColorScheme,
      modeStorageKey: modeStorageKey,
      colorSchemeStorageKey: colorSchemeStorageKey,
      defaultMode: defaultMode,
      storageWindow: storageWindow
    }),
        mode = _useCurrentColorSchem.mode,
        setMode = _useCurrentColorSchem.setMode,
        systemMode = _useCurrentColorSchem.systemMode,
        lightColorScheme = _useCurrentColorSchem.lightColorScheme,
        darkColorScheme = _useCurrentColorSchem.darkColorScheme,
        colorScheme = _useCurrentColorSchem.colorScheme,
        setColorScheme = _useCurrentColorSchem.setColorScheme;

    var resolvedColorScheme = function () {
      if (!colorScheme) {
        // This scope occurs on the server
        if (defaultMode === 'dark') {
          return defaultDarkColorScheme;
        } // use light color scheme, if default mode is 'light' | 'auto'


        return defaultLightColorScheme;
      }

      return colorScheme;
    }();

    var theme = restThemeProp;

    var _cssVarsParser = cssVarsParser(theme, {
      prefix: cssVarPrefix,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar
    }),
        rootCss = _cssVarsParser.css,
        rootVars = _cssVarsParser.vars,
        parsedTheme = _cssVarsParser.parsedTheme;

    theme = _extends({}, parsedTheme, {
      components: components,
      colorSchemes: colorSchemes,
      cssVarPrefix: cssVarPrefix,
      vars: rootVars,
      getColorSchemeSelector: function getColorSchemeSelector(targetColorScheme) {
        return "[".concat(attribute, "=\"").concat(targetColorScheme, "\"] &");
      }
    });
    var defaultColorSchemeStyleSheet = {};
    var otherColorSchemesStyleSheet = {};
    Object.entries(colorSchemes).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          scheme = _ref3[1];

      var _cssVarsParser2 = cssVarsParser(scheme, {
        prefix: cssVarPrefix,
        shouldSkipGeneratingVar: shouldSkipGeneratingVar
      }),
          css = _cssVarsParser2.css,
          vars = _cssVarsParser2.vars,
          parsedScheme = _cssVarsParser2.parsedTheme;

      theme.vars = deepmerge(theme.vars, vars);

      if (key === resolvedColorScheme) {
        theme = _extends({}, theme, parsedScheme);

        if (theme.palette) {
          // assign runtime mode & colorScheme
          theme.palette.mode = mode;
          theme.palette.colorScheme = resolvedColorScheme;
        }
      }

      var resolvedDefaultColorScheme = function () {
        if (typeof defaultColorScheme === 'string') {
          return defaultColorScheme;
        }

        if (defaultMode === 'dark') {
          return defaultColorScheme.dark;
        }

        return defaultColorScheme.light;
      }();

      if (key === resolvedDefaultColorScheme) {
        defaultColorSchemeStyleSheet[colorSchemeSelector] = css;
      } else {
        otherColorSchemesStyleSheet["".concat(colorSchemeSelector === ':root' ? '' : colorSchemeSelector, "[").concat(attribute, "=\"").concat(key, "\"]")] = css;
      }
    });
    React.useEffect(function () {
      if (colorScheme && colorSchemeNode) {
        // attaches attribute to <html> because the css variables are attached to :root (html)
        colorSchemeNode.setAttribute(attribute, colorScheme);
      }
    }, [colorScheme, attribute, colorSchemeNode]);
    useEnhancedEffect(function () {
      if (!mode || !enableColorScheme || !colorSchemeNode) {
        return undefined;
      }

      var priorColorScheme = colorSchemeNode.style.getPropertyValue('color-scheme'); // `color-scheme` tells browser to render built-in elements according to its value: `light` or `dark`

      if (mode === 'system') {
        colorSchemeNode.style.setProperty('color-scheme', systemMode);
      } else {
        colorSchemeNode.style.setProperty('color-scheme', mode);
      }

      return function () {
        colorSchemeNode.style.setProperty('color-scheme', priorColorScheme);
      };
    }, [mode, systemMode, enableColorScheme, colorSchemeNode]);
    React.useEffect(function () {
      var timer;

      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
        var css = documentNode.createElement('style');
        css.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css); // Force browser repaint

        (function () {
          return window.getComputedStyle(documentNode.body);
        })();

        timer = setTimeout(function () {
          documentNode.head.removeChild(css);
        }, 1);
      }

      return function () {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React.useEffect(function () {
      hasMounted.current = true;
      return function () {
        hasMounted.current = false;
      };
    }, []);
    return /*#__PURE__*/_jsxs(ColorSchemeContext.Provider, {
      value: {
        mode: mode,
        setMode: setMode,
        lightColorScheme: lightColorScheme,
        darkColorScheme: darkColorScheme,
        colorScheme: colorScheme,
        setColorScheme: setColorScheme,
        allColorSchemes: allColorSchemes
      },
      children: [/*#__PURE__*/_jsx(GlobalStyles, {
        styles: _defineProperty({}, colorSchemeSelector, rootCss)
      }), /*#__PURE__*/_jsx(GlobalStyles, {
        styles: defaultColorSchemeStyleSheet
      }), /*#__PURE__*/_jsx(GlobalStyles, {
        styles: otherColorSchemesStyleSheet
      }), /*#__PURE__*/_jsx(ThemeProvider, {
        theme: resolveTheme ? resolveTheme(theme) : theme,
        children: children
      })]
    });
  }

  process.env.NODE_ENV !== "production" ? CssVarsProvider.propTypes = {
    /**
     * The body attribute name to attach colorScheme.
     */
    attribute: PropTypes.string,

    /**
     * The component tree.
     */
    children: PropTypes.node,

    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: PropTypes.any,

    /**
     * The CSS selector for attaching the generated custom properties
     */
    colorSchemeSelector: PropTypes.string,

    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: PropTypes.string,

    /**
     * The initial color scheme used.
     */
    defaultColorScheme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * The initial mode used.
     */
    defaultMode: PropTypes.string,

    /**
     * Disable CSS transitions when switching between modes or color schemes
     */
    disableTransitionOnChange: PropTypes.bool,

    /**
     * The document to attach the attribute to
     */
    documentNode: PropTypes.any,

    /**
     * Indicate to the browser which color scheme is used (light or dark) for rendering built-in UI
     */
    enableColorScheme: PropTypes.bool,

    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: PropTypes.string,

    /**
     * A function to determine if the key, value should be attached as CSS Variable
     */
    shouldSkipGeneratingVar: PropTypes.func,

    /**
     * The window that attaches the 'storage' event listener
     * @default window
     */
    storageWindow: PropTypes.any,

    /**
     * The calculated theme object that will be passed through context.
     */
    theme: PropTypes.object
  } : void 0;

  var getInitColorSchemeScript = function getInitColorSchemeScript(params) {
    return systemGetInitColorSchemeScript(_extends({
      attribute: defaultAttribute,
      colorSchemeStorageKey: defaultColorSchemeStorageKey,
      modeStorageKey: defaultModeStorageKey,
      enableColorScheme: designSystemEnableColorScheme
    }, params));
  };

  return {
    CssVarsProvider: CssVarsProvider,
    useColorScheme: useColorScheme,
    getInitColorSchemeScript: getInitColorSchemeScript
  };
}