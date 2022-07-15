"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _optionGroupUnstyledClasses = require("./optionGroupUnstyledClasses");

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["component", "components", "disabled", "componentsProps"];

function useUtilityClasses(disabled) {
  const slots = {
    root: ['root', disabled && 'disabled'],
    label: ['label'],
    list: ['list']
  };
  return (0, _composeClasses.default)(slots, _optionGroupUnstyledClasses.getOptionGroupUnstyledUtilityClass, {});
}
/**
 * An unstyled option group to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [OptionGroupUnstyled API](https://mui.com/base/api/option-group-unstyled/)
 */


const OptionGroupUnstyled = /*#__PURE__*/_react.default.forwardRef(function OptionGroupUnstyled(props, ref) {
  const {
    component,
    components = {},
    disabled = false,
    componentsProps = {}
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const Root = component || (components == null ? void 0 : components.Root) || 'li';
  const Label = (components == null ? void 0 : components.Label) || 'span';
  const List = (components == null ? void 0 : components.List) || 'ul';
  const classes = useUtilityClasses(disabled);
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState: props,
    className: classes.root
  });
  const labelProps = (0, _utils.useSlotProps)({
    elementType: Label,
    externalSlotProps: componentsProps.label,
    ownerState: props,
    className: classes.label
  });
  const listProps = (0, _utils.useSlotProps)({
    elementType: List,
    externalSlotProps: componentsProps.list,
    ownerState: props,
    className: classes.list
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Label, (0, _extends2.default)({}, labelProps, {
      children: props.label
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(List, (0, _extends2.default)({}, listProps, {
      children: props.children
    }))]
  }));
});

process.env.NODE_ENV !== "production" ? OptionGroupUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   * This is equivalent to components.Root.
   * If both are provided, the component is used.
   */
  component: _propTypes.default.elementType,

  /**
   * The components used for each slot inside the OptionGroupUnstyled.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    Label: _propTypes.default.elementType,
    List: _propTypes.default.elementType,
    Root: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    label: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    list: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),

  /**
   * If `true` all the options in the group will be disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * The human-readable description of the group.
   */
  label: _propTypes.default.node
} : void 0;
var _default = OptionGroupUnstyled;
exports.default = _default;