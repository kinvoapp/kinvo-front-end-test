import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_composeClasses as composeClasses, unstable_generateUtilityClass as generateUtilityClass } from '@mui/utils';
import systemStyled from '../styled';
import useThemePropsSystem from '../useThemeProps';
import useTheme from '../useTheme';
import { extendSxProp } from '../styleFunctionSx';
import createTheme from '../createTheme';
import { generateGridStyles, generateGridSizeStyles, generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridDirectionStyles, generateGridOffsetStyles, generateSizeClassNames, generateSpacingClassNames } from './gridGenerator';
import { jsx as _jsx } from "react/jsx-runtime";
var defaultTheme = createTheme(); // widening Theme to any so that the consumer can own the theme structure.

var defaultCreateStyledComponent = systemStyled('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
});

function useThemePropsDefault(props) {
  return useThemePropsSystem({
    props: props,
    name: 'MuiGrid',
    defaultTheme: defaultTheme
  });
}

export default function createGrid() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$createStyled = options.createStyledComponent,
      createStyledComponent = _options$createStyled === void 0 ? defaultCreateStyledComponent : _options$createStyled,
      _options$useThemeProp = options.useThemeProps,
      useThemeProps = _options$useThemeProp === void 0 ? useThemePropsDefault : _options$useThemeProp,
      _options$componentNam = options.componentName,
      componentName = _options$componentNam === void 0 ? 'MuiGrid' : _options$componentNam;
  var NestedContext = /*#__PURE__*/React.createContext(false);

  var useUtilityClasses = function useUtilityClasses(ownerState, theme) {
    var container = ownerState.container,
        direction = ownerState.direction,
        spacing = ownerState.spacing,
        wrap = ownerState.wrap,
        gridSize = ownerState.gridSize;
    var slots = {
      root: ['root', container && 'container', direction !== 'row' && "direction-xs-".concat(String(direction)), wrap !== 'wrap' && "wrap-xs-".concat(String(wrap))].concat(_toConsumableArray(generateSizeClassNames(gridSize)), _toConsumableArray(container ? generateSpacingClassNames(spacing, theme.breakpoints.keys[0]) : []))
    };
    return composeClasses(slots, function (slot) {
      return generateUtilityClass(componentName, slot);
    }, {});
  };

  var GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  var Grid = /*#__PURE__*/React.forwardRef(function Grid(inProps, ref) {
    var _inProps$columns, _inProps$spacing, _ref3, _inProps$rowSpacing, _ref4, _inProps$columnSpacin;

    var theme = useTheme();
    var themeProps = useThemeProps(inProps);
    var props = extendSxProp(themeProps); // `color` type conflicts with html color attribute.

    var nested = React.useContext(NestedContext);

    var className = props.className,
        _props$columns = props.columns,
        columnsProp = _props$columns === void 0 ? 12 : _props$columns,
        _props$container = props.container,
        container = _props$container === void 0 ? false : _props$container,
        _props$component = props.component,
        component = _props$component === void 0 ? 'div' : _props$component,
        _props$direction = props.direction,
        direction = _props$direction === void 0 ? 'row' : _props$direction,
        _props$wrap = props.wrap,
        wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
        _props$spacing = props.spacing,
        spacingProp = _props$spacing === void 0 ? 0 : _props$spacing,
        _props$rowSpacing = props.rowSpacing,
        rowSpacingProp = _props$rowSpacing === void 0 ? spacingProp : _props$rowSpacing,
        _props$columnSpacing = props.columnSpacing,
        columnSpacingProp = _props$columnSpacing === void 0 ? spacingProp : _props$columnSpacing,
        rest = _objectWithoutProperties(props, ["className", "columns", "container", "component", "direction", "wrap", "spacing", "rowSpacing", "columnSpacing"]); // collect breakpoints related props because they can be custom from the theme.


    var gridSize = {};
    var gridOffset = {};
    var other = {};
    Object.entries(rest).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      if (theme.breakpoints.values[key] !== undefined) {
        gridSize[key] = val;
      } else if (theme.breakpoints.values[key.replace('Offset', '')] !== undefined) {
        gridOffset[key.replace('Offset', '')] = val;
      } else {
        other[key] = val;
      }
    });
    var columns = (_inProps$columns = inProps.columns) != null ? _inProps$columns : nested ? undefined : columnsProp;
    var spacing = (_inProps$spacing = inProps.spacing) != null ? _inProps$spacing : nested ? undefined : spacingProp;
    var rowSpacing = (_ref3 = (_inProps$rowSpacing = inProps.rowSpacing) != null ? _inProps$rowSpacing : inProps.spacing) != null ? _ref3 : nested ? undefined : rowSpacingProp;
    var columnSpacing = (_ref4 = (_inProps$columnSpacin = inProps.columnSpacing) != null ? _inProps$columnSpacin : inProps.spacing) != null ? _ref4 : nested ? undefined : columnSpacingProp;

    var ownerState = _extends({}, props, {
      nested: nested,
      columns: columns,
      container: container,
      direction: direction,
      wrap: wrap,
      spacing: spacing,
      rowSpacing: rowSpacing,
      columnSpacing: columnSpacing,
      gridSize: gridSize,
      gridOffset: gridOffset
    });

    var classes = useUtilityClasses(ownerState, theme);

    var result = /*#__PURE__*/_jsx(GridRoot, _extends({
      ref: ref,
      as: component,
      ownerState: ownerState,
      className: clsx(classes.root, className)
    }, other));

    if (!nested) {
      result = /*#__PURE__*/_jsx(NestedContext.Provider, {
        value: true,
        children: result
      });
    }

    return result;
  });
  process.env.NODE_ENV !== "production" ? Grid.propTypes
  /* remove-proptypes */
  = {
    children: PropTypes.node,
    className: PropTypes.string,
    columns: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number, PropTypes.object]),
    columnSpacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    component: PropTypes.elementType,
    container: PropTypes.bool,
    direction: PropTypes.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),
    lg: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),
    lgOffset: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
    md: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),
    mdOffset: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
    rowSpacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    sm: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),
    smOffset: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
    spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
    wrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
    xl: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),
    xlOffset: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
    xs: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),
    xsOffset: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number])
  } : void 0;
  return Grid;
}