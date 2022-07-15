import * as React from 'react';
import { ButtonUnstyledProps, ButtonUnstyledOwnProps } from './ButtonUnstyled.types';
export interface ButtonUnstyledOwnerState extends ButtonUnstyledOwnProps {
    focusVisible: boolean;
    active: boolean;
}
/**
 * The foundation for building custom-styled buttons.
 *
 * Demos:
 *
 * - [Button](https://mui.com/base/react-button/)
 *
 * API:
 *
 * - [ButtonUnstyled API](https://mui.com/base/api/button-unstyled/)
 */
declare const ButtonUnstyled: React.ForwardRefExoticComponent<Pick<ButtonUnstyledProps<React.ElementType<any>, {}>, string | number | symbol> & React.RefAttributes<any>>;
export default ButtonUnstyled;
