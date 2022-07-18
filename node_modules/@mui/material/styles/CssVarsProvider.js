import _extends from "@babel/runtime/helpers/esm/extends";
import { unstable_createCssVarsProvider as createCssVarsProvider } from '@mui/system';
import experimental_extendTheme from './experimental_extendTheme';
import createTypography from './createTypography';

const shouldSkipGeneratingVar = keys => {
  var _keys$;

  return !!keys[0].match(/(typography|mixins|breakpoints|direction|transitions)/) || keys[0] === 'palette' && !!((_keys$ = keys[1]) != null && _keys$.match(/(mode|contrastThreshold|tonalOffset)/));
};

const defaultTheme = experimental_extendTheme();
const {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = createCssVarsProvider({
  theme: defaultTheme,
  attribute: 'data-mui-color-scheme',
  modeStorageKey: 'mui-mode',
  colorSchemeStorageKey: 'mui-color-scheme',
  defaultColorScheme: {
    light: 'light',
    dark: 'dark'
  },
  resolveTheme: theme => {
    const newTheme = _extends({}, theme, {
      typography: createTypography(theme.palette, theme.typography)
    });

    return newTheme;
  },
  shouldSkipGeneratingVar
});
export { useColorScheme, getInitColorSchemeScript, shouldSkipGeneratingVar, CssVarsProvider as Experimental_CssVarsProvider };