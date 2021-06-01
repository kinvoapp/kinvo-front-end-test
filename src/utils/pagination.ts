export const PaginationUtil = (
  ListPage: [],
  peerPage: number,
  currentPage: number
): any => {
  const firstItem = (currentPage - 1) * peerPage
  const lastItem = currentPage * peerPage - 1
  const sliced: any = ListPage?.slice(firstItem, lastItem + 1)
  return sliced
}
