import produce from 'immer';
import { Action, Reducer } from 'redux';

export default function createReducer(intialState: any, handlers: any) {
  return (state = intialState, action: { type: string }) => {
    const handler = handlers[action.type];

    if (!handler) {
      return state;
    }
    return produce(state, (draft: any) => handler(draft, action));
  };
}

type SubType<Base, Condition> = Pick<
  Base,
  {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
  }[keyof Base]
>;

type GetArgumentType<original extends Function> = original extends (
  ...x: infer argumentsType
) => any
  ? argumentsType
  : never;
type QuickActionCreator<T extends Function, A> = (
  ...args: GetArgumentType<T>
) => Action<A>;
type ActionGroup<T> = {
  [K in keyof SubType<T, (...args: any) => void>]: T[K] extends Function
    ? QuickActionCreator<T[K], any>
    : never;
};

export class Hen<T> {
  state: T;

  constructor(initialState: T) {
    this.state = initialState;
  }
}

export function hen<T extends Hen<any>>(cls: T): [Reducer, ActionGroup<T>] {
  const actionPrefix = cls.constructor.name;
  let reducers = {} as any;
  let actions = {} as any;

  // create reducers
  Reflect.ownKeys(Reflect.getPrototypeOf(cls))
    .concat(Reflect.ownKeys(cls))
    .forEach((key) => {
      if (key === 'constructor') {
        return;
      }
      const actionType = `${actionPrefix}.${key as string}`;
      //@ts-ignore
      const p = cls[key];
      if (typeof p !== 'function') {
        return;
      }

      reducers[actionType] = (
        state: T,
        action: { type: string; payload: any }
      ) => {
        let reducerClass = new (cls as any).constructor(state);
        reducerClass[key](...action.payload);
        return state;
      };

      actions[key as any] = function () {
        const act = {
          type: actionType,
          payload: Array.from(arguments),
        };
        return act;
      };
    });

  const red = createReducer(cls.state, reducers);
  return [red, actions as ActionGroup<T>];
}
