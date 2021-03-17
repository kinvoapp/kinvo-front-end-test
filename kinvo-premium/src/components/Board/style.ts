import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BoardContainer = styled.div`
  background-color: var(--white);
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0rem 1rem;
  border-radius: 10px;
  flex-direction: column;
`;

export const BoardButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 40%;
`;

export const Title = styled.h1`
  font-size: 13pt;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--gray-strong);
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  right: 0;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 10px;
  border: 0.1rem solid var(--gray-search);
`;

export const SearchIcon = styled.button`
  background-image: url(${(props: { image: string }) => props.image});
  background-repeat: no-repeat;
  background-size: 0.8rem;
  width: 1rem;
  height: 0.8rem;
  margin: 0.5rem;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 8pt;
  width: 100%;
  outline: none;

  @media (max-width: 1280px) {
    font-size: 7pt;
  }

  @media (max-width: 780px) {
    font-size: 6pt;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 75%;
  right: 0;
  margin-right: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 10px;
  border: 0.1rem solid var(--gray-search);
  position: relative;
`;

export const FilterText = styled.h5`
  font-size: 8pt;
  font-weight: 600;
  color: var(--gray-strong);

  @media (max-width: 780px) {
    font-size: 7pt;
  }
`;

export const FilterIcon = styled.button`
  background-image: ${(props: { image: string; rotate?: string }) =>
    `url(${props.image})`};
  background-repeat: no-repeat;
  width: 0.7rem;
  height: 0.5rem;
  transform: ${(props: { image: string; rotate: string }) =>
    `rotate(${props.rotate})`};
  -webkit-transform: ${(props: { image: string; rotate: string }) =>
    `rotate(${props.rotate})`};
  -ms-transform: rotate(180deg)
    ${(props: { image: string; rotate: string }) => `rotate(${props.rotate})`};
  
  @media (max-width: 780px) {
    width: 0.9rem;
    height: 0.6rem;
  }
`;

export const FilterOpenedContainer = styled.div`
  display: flex;
  width: 100%;
  right: 0;
  flex-direction: column;
  align-items: center;
  margin-top: 55%;
  background-color: var(--white);
  border: 0.1rem solid var(--gray-search);
  position: absolute;
`;

export const FilterOpenedText = styled.button`
  font-size: 8pt;
  font-weight: 600;
  padding: 0.5rem;
  width: 100%;
  color: var(--gray-strong);
  border-bottom: 0.1rem solid var(--gray-search);

  &:hover {
    background-color: var(--gray-active);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  right: 0;
  margin-right: 1rem;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 10px;
  border: 0.1rem solid var(--gray-search);
  width: ${(props: { width: number }) => `${props.width}%`};
`;

export const CardTitle = styled.h5`
  font-size: 7pt;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--gray-strong);

  @media (max-width: 1280px) {
    font-size: 6pt;
  }

  @media (max-width: 780px) {
    font-size: 4pt;
  }
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 780px) {
    margin-top: 0.7rem;
  }
`;

export const TextLeft = styled.h5`
  font-size: 8pt;
  font-weight: 600;
  color: var(--gray-strong);

  @media (max-width: 1280px) {
    font-size: 6pt;
  }

  @media (max-width: 780px) {
    font-size: 5pt;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TextRight = styled.h5`
  font-size: 11pt;
  font-weight: 600;
  color: ${(props: { color: string }) => props.color};

  @media (max-width: 1280px) {
    font-size: 9pt;
  }

  @media (max-width: 780px) {
    font-size: 6pt;
  }
`;

export const FooterPagination = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  bottom: 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-top: 0.1rem solid var(--gray-search);
`;

export const SquareNumber = styled.button`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: 600;
  margin-right: 0.5rem;
  font-size: 10pt;
  color: ${(props: { color: string; backgroundColor: string }) => props.color};
  background-color: ${(props: { color: string; backgroundColor: string }) =>
    props.backgroundColor};
  border: 0.1rem solid var(--gray-pagination);
  box-shadow: -1px 2px 11px -1px rgba(0, 0, 0, 0.01);
`;

export const SquareIcon = styled.button`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  background-image: ${(props: { image: string }) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-color: var(--white);
  background-size: 0.4rem;
  background-position: center;
  margin-right: 0.5rem;
  border: 0.1rem solid var(--gray-pagination);
  border-radius: 5px;
  box-shadow: -1px 2px 11px -1px rgba(0, 0, 0, 0.01);
`;