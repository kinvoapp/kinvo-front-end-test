export interface PaginationInterface {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  setOffset(arg: number): void;
  previousPage(arg: number): void;
  nextPage(arg: number): void;
}
