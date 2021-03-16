export function searchResult(searchTerm: string) {
  return {
    type: 'SEARCH_TERM',
    payload: {
      searchTerm
    }
  };
}

