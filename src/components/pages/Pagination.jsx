import styles from "./Pagination.module.css";
import lightggrayarrow from "../../assets/lightgrayarrow.svg";
import PaginationButton from "./PaginationButton";

const Pagination = ({ fixedIncomeData, setCurrentPage, currentPage }) => {
  let nOfItemPerPage = 5;
  let pages = [];
  let totalOfItem;
  if (fixedIncomeData) {
    totalOfItem = fixedIncomeData.length;
  }
  const nOfPages = Math.ceil(totalOfItem / nOfItemPerPage);

  for (let i = 1; i <= nOfPages; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.containerpagination}>
      <div className={styles.containerbuttons}>
        <div
          className={styles.containerarrow}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          <img className={styles.leftarrow} src={lightggrayarrow} alt="" />
        </div>
        {pages.map((number) => (
          <PaginationButton
            key={number}
            number={number}
            setCurrentPage={(e) => setCurrentPage(e)}
            currentPage={currentPage}
          />
        ))}
        <div
          className={styles.containerarrow}
          onClick={() =>
            currentPage < nOfPages && setCurrentPage(currentPage + 1)
          }
        >
          <img src={lightggrayarrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
