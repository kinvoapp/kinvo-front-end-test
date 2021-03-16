import { Reducer } from 'redux';
import { SearchInterface } from './types';


const INITIAL_STATE : SearchInterface = {
  search: '',
}

const search: Reducer<SearchInterface> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SEARCH_TERM' : {
      const { searchTerm } = action.payload;
      return {
        ...state,
        search:
          searchTerm
      };
    }
    default: {
      return state;
    }
  }
}

export default search;