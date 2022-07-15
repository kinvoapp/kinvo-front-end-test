"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@mui/utils");

var _utils2 = require("./utils");

var _useSelect = _interopRequireDefault(require("./useSelect"));

var _utils3 = require("../utils");

var _PopperUnstyled = _interopRequireDefault(require("../PopperUnstyled"));

var _SelectUnstyledContext = require("./SelectUnstyledContext");

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _selectUnstyledClasses = require("./selectUnstyledClasses");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["autoFocus", "children", "component", "components", "componentsProps", "defaultValue", "defaultListboxOpen", "disabled", "listboxId", "listboxOpen", "onChange", "onListboxOpenChange", "renderValue", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function defaultRenderSingleValue(selectedOption) {
  var _selectedOption$label;

  return (_selectedOption$label = selectedOption == null ? void 0 : selectedOption.label) != null ? _selectedOption$label : '';
}

function useUtilityClasses(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active', open && 'expanded'],
    listbox: ['listbox', disabled && 'disabled'],
    popper: ['popper']
  };
  return (0, _composeClasses.default)(slots, _selectUnstyledClasses.getSelectUnstyledUtilityClass, {});
}
/**
 * The foundation for building custom-styled select components.
 */


const SelectUnstyled = /*#__PURE__*/React.forwardRef(function SelectUnstyled(props, ref) {
  var _ref, _components$Listbox, _components$Popper;

  const {
    autoFocus,
    children,
    component,
    components = {},
    componentsProps = {},
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledProp,
    listboxId,
    listboxOpen: listboxOpenProp,
    onChange,
    onListboxOpenChange,
    renderValue: renderValueProp,
    value: valueProp
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderSingleValue;
  const [groupedOptions, setGroupedOptions] = React.useState([]);
  const options = React.useMemo(() => (0, _utils2.flattenOptionGroups)(groupedOptions), [groupedOptions]);
  const [listboxOpen, setListboxOpen] = (0, _utils.unstable_useControlled)({
    controlled: listboxOpenProp,
    default: defaultListboxOpen,
    name: 'SelectUnstyled',
    state: 'listboxOpen'
  });
  React.useEffect(() => {
    setGroupedOptions((0, _utils2.getOptionsFromChildren)(children));
  }, [children]);
  const [buttonDefined, setButtonDefined] = React.useState(false);
  const buttonRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const Button = (_ref = component != null ? component : components.Root) != null ? _ref : 'button';
  const ListboxRoot = (_components$Listbox = components.Listbox) != null ? _components$Listbox : 'ul';
  const Popper = (_components$Popper = components.Popper) != null ? _components$Popper : _PopperUnstyled.default;

  const handleButtonRefChange = element => {
    buttonRef.current = element;

    if (element != null) {
      setButtonDefined(true);
    }
  };

  const handleButtonRef = (0, _utils.unstable_useForkRef)(ref, handleButtonRefChange);
  React.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);

  const handleOpenChange = isOpen => {
    setListboxOpen(isOpen);
    onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
  };

  const {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    value
  } = (0, _useSelect.default)({
    buttonRef: handleButtonRef,
    defaultValue,
    disabled: disabledProp,
    listboxId,
    multiple: false,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpen,
    options,
    value: valueProp
  });
  const ownerState = (0, _extends2.default)({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value
  });
  const classes = useUtilityClasses(ownerState);
  const selectedOptions = React.useMemo(() => {
    return options.find(o => value === o.value);
  }, [options, value]);
  const buttonProps = (0, _utils3.useSlotProps)({
    elementType: Button,
    getSlotProps: getButtonProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const listboxProps = (0, _utils3.useSlotProps)({
    elementType: ListboxRoot,
    getSlotProps: getListboxProps,
    externalSlotProps: componentsProps.listbox,
    additionalProps: {
      ref: listboxRef
    },
    ownerState,
    className: classes.listbox
  });
  const popperProps = (0, _utils3.useSlotProps)({
    elementType: Popper,
    externalSlotProps: componentsProps.popper,
    additionalProps: {
      anchorEl: buttonRef.current,
      disablePortal: true,
      open: listboxOpen,
      placement: 'bottom-start',
      role: undefined
    },
    ownerState,
    className: classes.popper
  });
  const context = {
    getOptionProps,
    getOptionState,
    listboxRef
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Button, (0, _extends2.default)({}, buttonProps, {
      children: renderValue(selectedOptions)
    })), buttonDefined && /*#__PURE__*/(0, _jsxRuntime.jsx)(Popper, (0, _extends2.default)({}, popperProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ListboxRoot, (0, _extends2.default)({}, listboxProps, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectUnstyledContext.SelectUnstyledContext.Provider, {
          value: context,
          children: children
        })
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" ? SelectUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: _propTypes.default.bool,

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  component: _propTypes.default.elementType,

  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .shape({
    Listbox: _propTypes.default.elementType,
    Popper: _propTypes.default.elementType,
    Root: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    listbox: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    popper: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),

  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: _propTypes.default.bool,

  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .any,

  /**
   * If `true`, the select is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * `id` attribute of the listbox element.
   * Also used to derive the `id` attributes of options.
   */
  listboxId: _propTypes.default.string,

  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: _propTypes.default.bool,

  /**
   * Callback fired when an option is selected.
   */
  onChange: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: _propTypes.default.func,

  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: _propTypes.default.func,

  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .any
} : void 0;
/**
 * The foundation for building custom-styled select components.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [SelectUnstyled API](https://mui.com/base/api/select-unstyled/)
 */

var _default = SelectUnstyled;
exports.default = _default;