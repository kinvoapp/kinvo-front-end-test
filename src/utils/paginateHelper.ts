type PaginateReturnType = Array<any>;

interface PaginateFunctionProps {
  Items: Array<any>;
  itemsPerPage: number;
  pageNumber: number;
}

type PaginateFunctionPropsExcludePageNumber = Omit<PaginateFunctionProps, 'pageNumber'>;

interface calculateHowManyPagesWithItemsPerPageProps extends PaginateFunctionPropsExcludePageNumber {}

export const paginate = (paginateProps: PaginateFunctionProps): PaginateReturnType => {
  const { Items, itemsPerPage, pageNumber } = paginateProps;
  return Items.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);
};

export const calculateHowManyPagesWithItemsPerPage = (calculateHowManyPagesWithItemsPerPage: calculateHowManyPagesWithItemsPerPageProps) => {
  const { Items, itemsPerPage } = calculateHowManyPagesWithItemsPerPage;

  return Math.ceil(Items.length / itemsPerPage);
};
