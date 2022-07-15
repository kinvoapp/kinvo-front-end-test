import _extends from "@babel/runtime/helpers/esm/extends";
import isHostComponent from './isHostComponent';
/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
export default function appendOwnerState(elementType) {
  var otherProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ownerState = arguments.length > 2 ? arguments[2] : undefined;

  if (isHostComponent(elementType)) {
    return otherProps;
  }

  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}