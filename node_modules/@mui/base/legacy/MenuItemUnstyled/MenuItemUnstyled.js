import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import { getMenuItemUnstyledUtilityClass } from './menuItemUnstyledClasses';
import useMenuItem from './useMenuItem';
import composeClasses from '../composeClasses';
import useSlotProps from '../utils/useSlotProps';
import { jsx as _jsx } from "react/jsx-runtime";

function getUtilityClasses(ownerState) {
  var disabled = ownerState.disabled,
      focusVisible = ownerState.focusVisible;
  var slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  return composeClasses(slots, getMenuItemUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuItemUnstyled API](https://mui.com/base/api/menu-item-unstyled/)
 */


var MenuItemUnstyled = /*#__PURE__*/React.forwardRef(function MenuItemUnstyled(props, ref) {
  var _ref;

  var children = props.children,
      _props$disabled = props.disabled,
      disabledProp = _props$disabled === void 0 ? false : _props$disabled,
      component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      label = props.label,
      other = _objectWithoutProperties(props, ["children", "disabled", "component", "components", "componentsProps", "label"]);

  var _useMenuItem = useMenuItem({
    disabled: disabledProp,
    ref: ref,
    label: label
  }),
      getRootProps = _useMenuItem.getRootProps,
      disabled = _useMenuItem.disabled,
      focusVisible = _useMenuItem.focusVisible;

  var ownerState = _extends({}, props, {
    disabled: disabled,
    focusVisible: focusVisible
  });

  var classes = getUtilityClasses(ownerState);
  var Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'li';
  var rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState: ownerState
  });
  return /*#__PURE__*/_jsx(Root, _extends({}, rootProps, {
    children: children
  }));
});
process.env.NODE_ENV !== "production" ? MenuItemUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  component: PropTypes.elementType,

  /**
   * @ignore
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),

  /**
   * @ignore
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),

  /**
   * If `true`, the menu item will be disabled.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * A text representation of the menu item's content.
   * Used for keyboard text navigation matching.
   */
  label: PropTypes.string
} : void 0;
export default MenuItemUnstyled;