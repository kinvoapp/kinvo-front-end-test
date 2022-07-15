import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["checked", "component", "components", "componentsProps", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required"];
import * as React from 'react';
import PropTypes from 'prop-types';
import composeClasses from '../composeClasses';
import useSwitch from './useSwitch';
import { getSwitchUnstyledUtilityClass } from './switchUnstyledClasses';
import { useSlotProps } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const useUtilityClasses = ownerState => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', focusVisible && 'focusVisible', readOnly && 'readOnly'],
    thumb: ['thumb'],
    input: ['input'],
    track: ['track']
  };
  return composeClasses(slots, getSwitchUnstyledUtilityClass, {});
};
/**
 * The foundation for building custom-styled switches.
 *
 * Demos:
 *
 * - [Switch](https://mui.com/base/react-switch/)
 *
 * API:
 *
 * - [SwitchUnstyled API](https://mui.com/base/api/switch-unstyled/)
 */


const SwitchUnstyled = /*#__PURE__*/React.forwardRef(function SwitchUnstyled(props, ref) {
  const {
    checked: checkedProp,
    component,
    components = {},
    componentsProps = {},
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const useSwitchProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = useSwitch(useSwitchProps);

  const ownerState = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly
  });

  const classes = useUtilityClasses(ownerState);
  const Root = component ?? components.Root ?? 'span';
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
  const Thumb = components.Thumb ?? 'span';
  const thumbProps = useSlotProps({
    elementType: Thumb,
    externalSlotProps: componentsProps.thumb,
    ownerState,
    className: classes.thumb
  });
  const Input = components.Input ?? 'input';
  const inputProps = useSlotProps({
    elementType: Input,
    getSlotProps: getInputProps,
    externalSlotProps: componentsProps.input,
    ownerState,
    className: classes.input
  });
  const Track = components.Track === null ? () => null : components.Track ?? 'span';
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: componentsProps.track,
    ownerState,
    className: classes.track
  });
  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, {
    children: [/*#__PURE__*/_jsx(Track, _extends({}, trackProps)), /*#__PURE__*/_jsx(Thumb, _extends({}, thumbProps)), /*#__PURE__*/_jsx(Input, _extends({}, inputProps))]
  }));
});
process.env.NODE_ENV !== "production" ? SwitchUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,

  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   * This is equivalent to `components.Root`. If both are provided, the `component` is used.
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the Switch.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes
  /* @typescript-to-proptypes-ignore */
  .shape({
    Input: PropTypes.elementType,
    Root: PropTypes.elementType,
    Thumb: PropTypes.elementType,
    Track: PropTypes.oneOfType([PropTypes.elementType, PropTypes.oneOf([null])])
  }),

  /**
   * The props used for each slot inside the Switch.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    thumb: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    track: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),

  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: PropTypes.bool,

  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * @ignore
   */
  onFocusVisible: PropTypes.func,

  /**
   * If `true`, the component is read only.
   */
  readOnly: PropTypes.bool,

  /**
   * If `true`, the `input` element is required.
   */
  required: PropTypes.bool
} : void 0;
export default SwitchUnstyled;