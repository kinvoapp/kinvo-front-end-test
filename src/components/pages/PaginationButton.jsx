import styles from "./PaginationButton.module.css";

const PaginationButton = ({ number, currentPage, setCurrentPage }) => {
  let buttonStyle = "containernumber";

  if (number === currentPage) {
    buttonStyle = "containernumberselected";
  }

  return (
    <div
      className={`${styles[buttonStyle]}`}
      onClick={() => setCurrentPage(number)}
    >
      <p>{number}</p>
    </div>
  );
};

export default PaginationButton;
