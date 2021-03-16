import { Store, createStore, applyMiddleware } from 'redux';
import { Middleware } from 'redux';
import { RootState } from '../ducks/state';
import { rootReducer } from '../ducks';
import thunk from 'redux-thunk';

export const logger: Middleware = () => (next) => (action) => {
  return next(action);
};

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(logger, thunk);

  const store = createStore(
    rootReducer as any,
    initialState,
    middleware
  ) as Store<RootState>;

  if ((module as any).hot) {
    (module as any).hot.accept('../ducks', () => {
      const nextReducer = require('../ducks');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
