import { Simplify } from '@mui/types';
import React from 'react';
/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */
declare type OwnerStateWhenApplicable<ElementType extends React.ElementType, OwnerState> = ElementType extends React.ComponentType<any> ? OwnerState : ElementType extends keyof JSX.IntrinsicElements ? undefined : OwnerState | undefined;
export declare type AppendOwnerStateReturnType<ElementType extends React.ElementType, OtherProps, OwnerState> = Simplify<OtherProps & {
    ownerState: OwnerStateWhenApplicable<ElementType, OwnerState>;
}>;
/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
export default function appendOwnerState<ElementType extends React.ElementType, OtherProps extends Record<string, any>, OwnerState>(elementType: ElementType, otherProps: OtherProps | undefined, ownerState: OwnerState): AppendOwnerStateReturnType<ElementType, OtherProps, OwnerState>;
export {};
