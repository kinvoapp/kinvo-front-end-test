import { createStore } from 'redux';
import { SearchInterface } from './modules/search/types';
import rootReducer from './modules/rootReducer';


export interface State {
  search: SearchInterface
}

const store = createStore(rootReducer);

export default store;