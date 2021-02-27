export interface Pagination {
  size: number;
  page: number;
  take: number;
  total: number;
  skip: number;
}

export interface PaginationOptions {
  page: number;
}

export type PaginationHandler = (options: PaginationOptions) => void;
