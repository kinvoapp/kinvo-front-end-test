import React from 'react';
export interface UseSliderParameters {
    'aria-labelledby'?: string;
    defaultValue?: number | number[];
    disabled?: boolean;
    disableSwap?: boolean;
    isRtl?: boolean;
    marks?: boolean | Mark[];
    max?: number;
    min?: number;
    name?: string;
    onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
    onChangeCommitted?: (event: React.SyntheticEvent | Event, value: number | number[]) => void;
    orientation?: 'horizontal' | 'vertical';
    ref: React.Ref<any>;
    scale?: (value: number) => number;
    step?: number | null;
    tabIndex?: number;
    value?: number | number[];
}
export interface Mark {
    value: number;
    label?: React.ReactNode;
}
declare type UseSliderRootSlotOwnProps = {
    onMouseDown: React.MouseEventHandler;
    ref: React.Ref<any>;
};
export declare type UseSliderRootSlotProps<TOther = {}> = Omit<TOther, keyof UseSliderRootSlotOwnProps> & UseSliderRootSlotOwnProps;
declare type UseSliderThumbSlotOwnProps = {
    onMouseLeave: React.MouseEventHandler;
    onMouseOver: React.MouseEventHandler;
};
export declare type UseSliderThumbSlotProps<TOther = {}> = Omit<TOther, keyof UseSliderThumbSlotOwnProps> & UseSliderThumbSlotOwnProps;
declare type UseSliderHiddenInputOwnProps = {
    'aria-labelledby'?: string;
    'aria-orientation'?: React.AriaAttributes['aria-orientation'];
    'aria-valuemax'?: React.AriaAttributes['aria-valuemax'];
    'aria-valuemin'?: React.AriaAttributes['aria-valuemin'];
    disabled: boolean;
    name?: string;
    onBlur: React.FocusEventHandler;
    onChange: React.ChangeEventHandler;
    onFocus: React.FocusEventHandler;
    step?: number;
    style: React.CSSProperties;
    tabIndex?: number;
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
};
export declare type UseSliderHiddenInputProps<TOther = {}> = Omit<TOther, keyof UseSliderHiddenInputOwnProps> & UseSliderHiddenInputOwnProps;
export {};
