/// <reference types="react" />
export declare type EventHandlers = Record<string, React.EventHandler<any>>;
export declare type WithOptionalOwnerState<T extends {
    ownerState: unknown;
}> = Omit<T, 'ownerState'> & Partial<Pick<T, 'ownerState'>>;
export declare type SlotComponentProps<TSlotComponent extends React.ElementType, TOverrides, TOwnerState> = (Partial<React.ComponentPropsWithRef<TSlotComponent>> & TOverrides) | ((ownerState: TOwnerState) => Partial<React.ComponentPropsWithRef<TSlotComponent>> & TOverrides);
