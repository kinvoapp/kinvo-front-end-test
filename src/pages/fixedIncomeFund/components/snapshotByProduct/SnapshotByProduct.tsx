import CardFolderType from '@components/cardFolderType/CardFolderType';
import SelectInput from '@components/selectInput/SelectInput';
import SvgIcon from '@components/svgIcon/SvgIcon';
import { ProductCategory } from '@pages/fixedIncomeFund/FixedIncomeFund.types';
import { calculateHowManyPagesWithItemsPerPage, paginate } from '@utils/paginateHelper';
import React, { useEffect, useState } from 'react';
import { selectOptions } from './SnapshotByProduct.data';
import { HeaderSnapshot, NavigationConteiner, SearchContainer, SearchInput, SnapshotByProductContainer, SnapshotContent, SnapshotRow, Title } from './SnapshotByProduct.styles';
import { SnapshotsByProductProps } from './SnapshotByProduct.types';

const SnapshotByProduct = (props: SnapshotsByProductProps) => {
  const { snapshotByProduct } = props;
  const [selectedFilter, setSelectedFilter] = useState('');
  const [actualPage, setActualPage] = useState<Array<{}>>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleChangeSelect = (value) => {
    setSelectedFilter(value);
  }

  const Buttons: JSX.Element[] = [];

  for (let i = 1; i <= totalPages; i++) {
    Buttons.push(<button type="button" onClick={() => setCurrentPage(i)} disabled={currentPage === i}>{i}</button>)
  }

  const handleFilter = async (query: string) => {
    const filterOptions =  snapshotByProduct && snapshotByProduct.filter((content: any) => content.fixedIncome.name.toLowerCase().includes(query.toLowerCase()));
    setActualPage(filterOptions);
  }

  useEffect(() => {
    if (snapshotByProduct) {
      const initalItemsPage = paginate({Items: snapshotByProduct, itemsPerPage: 5, pageNumber: currentPage});
      const totalPage = calculateHowManyPagesWithItemsPerPage({ Items: snapshotByProduct, itemsPerPage: 5 });
      setTotalPages(totalPage);
      setActualPage(initalItemsPage);
    }
  },[snapshotByProduct])

  useEffect(() => {
    if (snapshotByProduct) {
      const initalItemsPage = snapshotByProduct && paginate({Items: snapshotByProduct, itemsPerPage: 5, pageNumber: currentPage});
      setActualPage(initalItemsPage)
    }
  }, [currentPage]);

  return (
    <SnapshotByProductContainer>
      <HeaderSnapshot>
        <Title>Minhas Rendas Fixas</Title>
        <SearchContainer>
          <SelectInput value={selectedFilter} options={selectOptions} onChange={event => handleChangeSelect(event.target.value)}/>
          <SearchInput>
            <SvgIcon src="./public/assets/svg/magnifying-glass-icon.svg" />
            <input onChange={event => handleFilter(event.target.value)} name="query" data-testid="searchInput"/>
          </SearchInput>
        </SearchContainer>
      </HeaderSnapshot>
      <SnapshotContent>
        {actualPage?.map(product => (
          <SnapshotRow data-testid="snap-row">
            {ProductCategory.map(object => (
              <CardFolderType title={object.title} data={product[object.slugname]} />
            ))}
          </SnapshotRow>
        ))}
        <NavigationConteiner>
          <button type="button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage - 1 === 0}>{'<'}</button>
            {Buttons}
          <button type="button" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>{'>'}</button>
        </NavigationConteiner>
      </SnapshotContent>
    </SnapshotByProductContainer>
  );
}

export default SnapshotByProduct;