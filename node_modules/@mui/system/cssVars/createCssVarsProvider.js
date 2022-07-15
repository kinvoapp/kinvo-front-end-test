"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DISABLE_CSS_TRANSITION = void 0;
exports.default = createCssVarsProvider;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _utils = require("@mui/utils");

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledEngine = require("@mui/styled-engine");

var _cssVarsParser = _interopRequireDefault(require("./cssVarsParser"));

var _ThemeProvider = _interopRequireDefault(require("../ThemeProvider"));

var _getInitColorSchemeScript = _interopRequireWildcard(require("./getInitColorSchemeScript"));

var _useCurrentColorScheme = _interopRequireDefault(require("./useCurrentColorScheme"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["colorSchemes", "components", "cssVarPrefix"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DISABLE_CSS_TRANSITION = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
exports.DISABLE_CSS_TRANSITION = DISABLE_CSS_TRANSITION;

function createCssVarsProvider(options) {
  const {
    theme: defaultTheme = {},
    attribute: defaultAttribute = _getInitColorSchemeScript.DEFAULT_ATTRIBUTE,
    modeStorageKey: defaultModeStorageKey = _getInitColorSchemeScript.DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey: defaultColorSchemeStorageKey = _getInitColorSchemeScript.DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    defaultMode: desisgnSystemMode = 'light',
    defaultColorScheme: designSystemColorScheme,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    enableColorScheme: designSystemEnableColorScheme = true,
    shouldSkipGeneratingVar: designSystemShouldSkipGeneratingVar,
    resolveTheme
  } = options;

  if (!defaultTheme.colorSchemes || typeof designSystemColorScheme === 'string' && !defaultTheme.colorSchemes[designSystemColorScheme] || typeof designSystemColorScheme === 'object' && !defaultTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || typeof designSystemColorScheme === 'object' && !defaultTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
    console.error(`MUI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
  }

  const ColorSchemeContext = /*#__PURE__*/React.createContext(undefined);

  const useColorScheme = () => {
    const value = React.useContext(ColorSchemeContext);

    if (!value) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`useColorScheme\` must be called under <CssVarsProvider />` : (0, _utils.formatMuiErrorMessage)(19));
    }

    return value;
  };

  function CssVarsProvider({
    children,
    theme: themeProp = defaultTheme,
    modeStorageKey = defaultModeStorageKey,
    colorSchemeStorageKey = defaultColorSchemeStorageKey,
    attribute = defaultAttribute,
    defaultMode = desisgnSystemMode,
    defaultColorScheme = designSystemColorScheme,
    disableTransitionOnChange = designSystemTransitionOnChange,
    enableColorScheme = designSystemEnableColorScheme,
    storageWindow = typeof window === 'undefined' ? undefined : window,
    documentNode = typeof document === 'undefined' ? undefined : document,
    colorSchemeNode = typeof document === 'undefined' ? undefined : document.documentElement,
    colorSchemeSelector = ':root',
    shouldSkipGeneratingVar = designSystemShouldSkipGeneratingVar
  }) {
    const hasMounted = React.useRef(false);
    const {
      colorSchemes = {},
      components = {},
      cssVarPrefix
    } = themeProp,
          restThemeProp = (0, _objectWithoutPropertiesLoose2.default)(themeProp, _excluded);
    const allColorSchemes = Object.keys(colorSchemes);
    const defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;
    const {
      mode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme,
      setColorScheme
    } = (0, _useCurrentColorScheme.default)({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme,
      defaultDarkColorScheme,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageWindow
    });

    const resolvedColorScheme = (() => {
      if (!colorScheme) {
        // This scope occurs on the server
        if (defaultMode === 'dark') {
          return defaultDarkColorScheme;
        } // use light color scheme, if default mode is 'light' | 'auto'


        return defaultLightColorScheme;
      }

      return colorScheme;
    })();

    let theme = restThemeProp;
    const {
      css: rootCss,
      vars: rootVars,
      parsedTheme
    } = (0, _cssVarsParser.default)(theme, {
      prefix: cssVarPrefix,
      shouldSkipGeneratingVar
    });
    theme = (0, _extends2.default)({}, parsedTheme, {
      components,
      colorSchemes,
      cssVarPrefix,
      vars: rootVars,
      getColorSchemeSelector: targetColorScheme => `[${attribute}="${targetColorScheme}"] &`
    });
    const defaultColorSchemeStyleSheet = {};
    const otherColorSchemesStyleSheet = {};
    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      const {
        css,
        vars,
        parsedTheme: parsedScheme
      } = (0, _cssVarsParser.default)(scheme, {
        prefix: cssVarPrefix,
        shouldSkipGeneratingVar
      });
      theme.vars = (0, _utils.deepmerge)(theme.vars, vars);

      if (key === resolvedColorScheme) {
        theme = (0, _extends2.default)({}, theme, parsedScheme);

        if (theme.palette) {
          // assign runtime mode & colorScheme
          theme.palette.mode = mode;
          theme.palette.colorScheme = resolvedColorScheme;
        }
      }

      const resolvedDefaultColorScheme = (() => {
        if (typeof defaultColorScheme === 'string') {
          return defaultColorScheme;
        }

        if (defaultMode === 'dark') {
          return defaultColorScheme.dark;
        }

        return defaultColorScheme.light;
      })();

      if (key === resolvedDefaultColorScheme) {
        defaultColorSchemeStyleSheet[colorSchemeSelector] = css;
      } else {
        otherColorSchemesStyleSheet[`${colorSchemeSelector === ':root' ? '' : colorSchemeSelector}[${attribute}="${key}"]`] = css;
      }
    });
    React.useEffect(() => {
      if (colorScheme && colorSchemeNode) {
        // attaches attribute to <html> because the css variables are attached to :root (html)
        colorSchemeNode.setAttribute(attribute, colorScheme);
      }
    }, [colorScheme, attribute, colorSchemeNode]);
    (0, _utils.unstable_useEnhancedEffect)(() => {
      if (!mode || !enableColorScheme || !colorSchemeNode) {
        return undefined;
      }

      const priorColorScheme = colorSchemeNode.style.getPropertyValue('color-scheme'); // `color-scheme` tells browser to render built-in elements according to its value: `light` or `dark`

      if (mode === 'system') {
        colorSchemeNode.style.setProperty('color-scheme', systemMode);
      } else {
        colorSchemeNode.style.setProperty('color-scheme', mode);
      }

      return () => {
        colorSchemeNode.style.setProperty('color-scheme', priorColorScheme);
      };
    }, [mode, systemMode, enableColorScheme, colorSchemeNode]);
    React.useEffect(() => {
      let timer;

      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
        const css = documentNode.createElement('style');
        css.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css); // Force browser repaint

        (() => window.getComputedStyle(documentNode.body))();

        timer = setTimeout(() => {
          documentNode.head.removeChild(css);
        }, 1);
      }

      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ColorSchemeContext.Provider, {
      value: {
        mode,
        setMode,
        lightColorScheme,
        darkColorScheme,
        colorScheme,
        setColorScheme,
        allColorSchemes
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_styledEngine.GlobalStyles, {
        styles: {
          [colorSchemeSelector]: rootCss
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledEngine.GlobalStyles, {
        styles: defaultColorSchemeStyleSheet
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledEngine.GlobalStyles, {
        styles: otherColorSchemesStyleSheet
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeProvider.default, {
        theme: resolveTheme ? resolveTheme(theme) : theme,
        children: children
      })]
    });
  }

  process.env.NODE_ENV !== "production" ? CssVarsProvider.propTypes = {
    /**
     * The body attribute name to attach colorScheme.
     */
    attribute: _propTypes.default.string,

    /**
     * The component tree.
     */
    children: _propTypes.default.node,

    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: _propTypes.default.any,

    /**
     * The CSS selector for attaching the generated custom properties
     */
    colorSchemeSelector: _propTypes.default.string,

    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: _propTypes.default.string,

    /**
     * The initial color scheme used.
     */
    defaultColorScheme: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

    /**
     * The initial mode used.
     */
    defaultMode: _propTypes.default.string,

    /**
     * Disable CSS transitions when switching between modes or color schemes
     */
    disableTransitionOnChange: _propTypes.default.bool,

    /**
     * The document to attach the attribute to
     */
    documentNode: _propTypes.default.any,

    /**
     * Indicate to the browser which color scheme is used (light or dark) for rendering built-in UI
     */
    enableColorScheme: _propTypes.default.bool,

    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: _propTypes.default.string,

    /**
     * A function to determine if the key, value should be attached as CSS Variable
     */
    shouldSkipGeneratingVar: _propTypes.default.func,

    /**
     * The window that attaches the 'storage' event listener
     * @default window
     */
    storageWindow: _propTypes.default.any,

    /**
     * The calculated theme object that will be passed through context.
     */
    theme: _propTypes.default.object
  } : void 0;

  const getInitColorSchemeScript = params => (0, _getInitColorSchemeScript.default)((0, _extends2.default)({
    attribute: defaultAttribute,
    colorSchemeStorageKey: defaultColorSchemeStorageKey,
    modeStorageKey: defaultModeStorageKey,
    enableColorScheme: designSystemEnableColorScheme
  }, params));

  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript
  };
}