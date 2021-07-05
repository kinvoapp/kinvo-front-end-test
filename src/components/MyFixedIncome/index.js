import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { useData } from '../../contexts/DataContext';
import { ReactComponent as Info } from '../../assets/info.svg';
import { ReactComponent as ArrowPage } from '../../assets/arrow-page.svg';
import { Wrapper, Item, Result, Navigation } from './styles';

export const MyFixedIncome = ({ type, search, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(null);
  const [removePagination, setRemovePagination] = useState(false);

  const {
    data: {
      data: { snapshotByProduct },
    },
  } = useData();

  const getProducts = () => {
    setCurrentPage(1);
    // Put the products in the state when entering the page
    if (snapshotByProduct)
      setProducts(snapshotByProduct.slice(currentPage - 1, limit));
  };

  const changePage = (page) => {
    setCurrentPage(page);
    let pagination;
    if (page === 1) pagination = 0;
    else pagination = (page - 1) * (limit - 1);
    setProducts(snapshotByProduct.slice(pagination, limit));
  };

  useEffect(() => {
    getProducts();
  }, [snapshotByProduct]);

  useEffect(() => {
    // Responsible for pagination and the filters
    if (snapshotByProduct) {
      if (search !== '' && type !== 'OrdenarPor') {
        const productsFound = snapshotByProduct.filter((product) =>
          product.fixedIncome.name.toLowerCase().includes(search.toLowerCase()),
        );

        if (type === 'due-date') {
          const productsFoundOrdered = productsFound.sort((a, b) =>
            a.due.daysUntilExpiration > b.due.daysUntilExpiration ? 1 : -1,
          );

          if (productsFoundOrdered.length <= limit) {
            setRemovePagination(true);
            setCurrentPage(1);
            setProducts(productsFoundOrdered);
          } else {
            setRemovePagination(false);
            setCurrentPage(1);
            setProducts(productsFoundOrdered.slice(0, limit));
          }
        } else {
          setRemovePagination(true);
          setCurrentPage(1);
          setProducts(productsFound);
          if (productsFound.length >= limit) {
            setRemovePagination(false);
            setCurrentPage(1);
            setProducts(productsFound.slice(0, limit));
          }
        }
      } else if (search !== '' && type === 'OrdenarPor') {
        const productsFound = snapshotByProduct.filter((product) =>
          product.fixedIncome.name.toLowerCase().includes(search.toLowerCase()),
        );

        if (productsFound.length <= limit) {
          setRemovePagination(true);
          setCurrentPage(1);
          setProducts(productsFound);
        } else {
          setRemovePagination(false);
          setCurrentPage(1);
          setProducts(productsFound.slice(0, limit));
        }
      } else if (search === '' && type === 'due-date') {
        const productsOrdered = snapshotByProduct.sort((a, b) =>
          a.due.daysUntilExpiration > b.due.daysUntilExpiration ? 1 : -1,
        );

        setRemovePagination(false);
        setCurrentPage(1);
        setProducts(productsOrdered.slice(0, limit));
      } else if (search === '' && type === 'OrdenarPor') {
        const defaultProducts = snapshotByProduct;

        if (defaultProducts.length <= limit) {
          setRemovePagination(true);
          setCurrentPage(1);
          setProducts(defaultProducts);
        } else {
          setRemovePagination(false);
          setCurrentPage(1);
          setProducts(defaultProducts.slice(0, limit));
        }
      }
    }
  }, [type, search]);

  return (
    <Wrapper>
      {products
        ? products.map(
            ({
              due: { date, daysUntilExpiration },
              fixedIncome: { bondType, name },
              position: {
                equity,
                valueApplied,
                profitability,
                portfolioPercentage,
                indexerLabel,
                indexerValue,
                percentageOverIndexer,
              },
            }) => (
              <Item key={name}>
                <div>
                  <h2>
                    Título <Info />
                  </h2>
                  <section>
                    <h2>{name}</h2>
                    <Result color="#8A51BA" text="Classe">
                      {bondType}
                    </Result>
                  </section>
                </div>
                <div>
                  <h2>
                    Minha Posição <Info />
                  </h2>
                  <section>
                    <Result color="#38BFA0" text="Valor Inves.">
                      {equity.toLocaleString('pt-br')}
                    </Result>
                    <Result color="#38BFA0" text="Saldo Bruto">
                      {valueApplied.toLocaleString('pt-br')}
                    </Result>
                    <Result color="#38BFA0" text="Rent.">
                      {profitability.toLocaleString('pt-br')}%
                    </Result>
                    <Result color="#38BFA0" text="% da Cart.">
                      {portfolioPercentage.toLocaleString('pt-br')}%
                    </Result>
                    <Result color="#38BFA0" text={indexerLabel}>
                      {indexerValue.toLocaleString('pt-br')}
                    </Result>
                    <Result color="#38BFA0" text={`Sobre ${indexerLabel}`}>
                      {percentageOverIndexer.toLocaleString('pt-br')}%
                    </Result>
                  </section>
                </div>
                <div>
                  <h2>
                    Vencimento <Info />
                  </h2>
                  <section>
                    <Result color="#008DCB" text="Data Venc.">
                      {date}
                    </Result>
                    <Result color="#008DCB" text="Dias até Venc.">
                      {daysUntilExpiration}
                    </Result>
                  </section>
                </div>
              </Item>
            ),
          )
        : Array.from(Array(limit), (e, i) => (
            <Item key={i}>
              <div>
                <h2>
                  <Skeleton width={100} />
                </h2>
                <section>
                  <h2>
                    <Skeleton width={180} count={2} />
                  </h2>
                  <Skeleton width={80} height={25} />
                </section>
              </div>
              <div>
                <h2>
                  <Skeleton width={100} />
                </h2>
                <section>
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                  <Skeleton width={80} height={25} />
                </section>
              </div>
              <div>
                <h2>
                  <Skeleton width={100} />
                </h2>
                <section>
                  <Skeleton width={80} height={25} />
                  <Skeleton
                    width={80}
                    height={25}
                    style={{ marginLeft: '20px' }}
                  />
                </section>
              </div>
            </Item>
          ))}
      {snapshotByProduct &&
        snapshotByProduct.length > 5 &&
        !removePagination && (
          <Navigation>
            {currentPage !== 1 && (
              <button
                type="button"
                onClick={() => changePage(currentPage - 1)}
                className="left"
              >
                <ArrowPage />
              </button>
            )}
            {Array.from(
              Array(Math.ceil(snapshotByProduct.length / limit)),
              (e, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => changePage(i + 1)}
                  disabled={currentPage === i + 1 && 'active'}
                  className={currentPage === i + 1 ? 'active' : ''}
                >
                  {i + 1}
                </button>
              ),
            )}
            {currentPage !== Math.ceil(snapshotByProduct.length / limit) && (
              <button
                type="button"
                onClick={() => changePage(currentPage + 1)}
                className="right"
              >
                <ArrowPage />
              </button>
            )}
          </Navigation>
        )}{' '}
      {!products && (
        <Navigation>
          <Skeleton width={35} height={35} />
          <Skeleton width={35} height={35} />
          <Skeleton width={35} height={35} />
        </Navigation>
      )}
    </Wrapper>
  );
};

MyFixedIncome.propTypes = {
  type: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  limit: PropTypes.number,
};

MyFixedIncome.defaultProps = {
  limit: 5,
};
