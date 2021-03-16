import { FooterPagination, SquareIcon, SquareNumber } from './style';

const imageLeftSrc = '/images/arrowLeft.svg';
const imageRightSrc = '/images/arrowRight.svg';

export default function Pagination(props: {
  totalItems: number;
  valuePerPage: number;
  onClick: (page: number) => void;
  actualPage: number;
}) {
  const pageNumbers: number[] = [];
  const numberOfPages = Math.ceil(props.totalItems / props.valuePerPage);

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <FooterPagination>
      {props.actualPage - 1 >= 1 && (
        <SquareIcon
          image={imageLeftSrc}
          onClick={() => props.onClick(props.actualPage - 1)}
        />
      )}
      {pageNumbers.map((element: number, indx) => (
        <SquareNumber
          color={
            element == props.actualPage ? 'var(--white)' : 'var(--light-gray)'
          }
          backgroundColor={
            element == props.actualPage ? 'var(--light-gray)' : 'var(--white)'
          }
          key={indx}
          onClick={() => props.onClick(element)}
        >
          {element}
        </SquareNumber>
      ))}
      {props.actualPage + 1 <= numberOfPages && (
        <SquareIcon
          image={imageRightSrc}
          onClick={() => props.onClick(props.actualPage + 1)}
        />
      )}
    </FooterPagination>
  );
}
