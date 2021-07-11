import Head from "next/head";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Typo from "../components/Typo";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { FixedIncomeResponse, ProductSnapshot } from "../types/api";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import Select from "../components/Select";
import Input from "../components/Input";

import searchIcon from "../assets/icons/search.svg";
import YieldChart from "./_charts/yieldChart";
import ProductEquityChart from "./_charts/productEquityChart";
import ProductTypeChart from "./_charts/productTypeChart";
import Box from "../components/Box";
import FixedIncomeCard from "../components/FixedIncomeCard";
import PaginatedList from "../components/PaginatedList";

export default function Home() {
  const pieChartColors = ["#FF8052", "#9E51BA", "#0DD1E3"];

  const { isLoading, data } = useQuery<FixedIncomeResponse>(
    "fixedIncomeData",
    () =>
      fetch(
        "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData"
      ).then((res) => res.json())
  );

  const [productEquities, setProductEquities] = useState<
    { name: string; value: number }[]
  >([]);
  const [productTypes, setProductTypes] = useState<{ value: number }[]>([]);

  useEffect(() => {
    if (data) {
      const productEquitiesWithName = data.data.snapshotByProduct.map(
        (product) => ({
          value: product.position.equity,
          name: product.fixedIncome.name,
        })
      );

      const productTypeIds = Array.from(
        new Set(
          data.data.dailyEquityByPortfolioChartData.map((p) => p.movementTypeId)
        )
      );

      const productTypes = productTypeIds.map((pId) => {
        const products = data.data.dailyEquityByPortfolioChartData.filter(
          (p) => p.movementTypeId === pId
        );
        return { value: products.reduce((acc, cur) => acc + cur.value, 0) };
      });

      setProductEquities(productEquitiesWithName);
      setProductTypes(productTypes);
    }
  }, [data]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"" | "name" | "duedate">("");
  const [filteredProducts, setFilteredProducts] = useState<ProductSnapshot[]>(
    []
  );

  function search(data) {
    const filtered = data.data.snapshotByProduct.filter((p) =>
      p.fixedIncome.name
        .toLocaleUpperCase()
        .includes(searchTerm.toLocaleUpperCase())
    );
    setFilteredProducts(filtered);
    setPage(1);
  }

  useEffect(() => {
    if (!data) {
      return;
    }

    if (!searchTerm) {
      setFilteredProducts(data.data.snapshotByProduct);
      setPage(1);
      return;
    }

    search(data);
  }, [searchTerm, data]);

  useEffect(() => {
    if (!data) {
      return;
    }

    if (!sortBy) {
      search(data);
      return;
    }

    const sortFn = {
      name: (x, y) => (x.fixedIncome.name < y.fixedIncome.name ? -1 : 1),
      duedate: (x, y) =>
        x.due.daysUntilExpiration < y.due.daysUntilExpiration ? -1 : 1,
    } as Record<
      typeof sortBy,
      (x: ProductSnapshot, y: ProductSnapshot) => number
    >;

    const sorted = [...filteredProducts].sort(sortFn[sortBy]);
    setFilteredProducts(() => sorted);
    setPage(1);
  }, [sortBy, data]);

  const [page, setPage] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fundo Renda Fixa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <div className={styles.contentContainer}>
        <SideBar />

        <main className={styles.main}>
          <Typo.Title>Renda Fixa</Typo.Title>
          <div className={styles.highlights}>
            <Card>
              <Box justifyContent="flex-start" alignItems="center">
                <div className={styles.highlightBar} />
                <Box flexDirection="column" alignItems="flex-start">
                  <Typo.Text textTransform="uppercase">Saldo Bruto</Typo.Text>
                  <Typo.Text variant="tinted">
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      data.data?.snapshotByPortfolio.equity
                    )}
                  </Typo.Text>
                </Box>
              </Box>
            </Card>
            <Card>
              <Box justifyContent="flex-start" alignItems="center">
                <div className={styles.highlightBar} />
                <Box flexDirection="column" alignItems="flex-start">
                  <Typo.Text textTransform="uppercase">
                    Valor aplicado
                  </Typo.Text>
                  <Typo.Text variant="tinted">
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      data.data?.snapshotByPortfolio.valueApplied
                    )}
                  </Typo.Text>
                </Box>
              </Box>
            </Card>
            <Card>
              <Box justifyContent="flex-start" alignItems="center">
                <div className={styles.highlightBar} />
                <Box flexDirection="column" alignItems="flex-start">
                  <Typo.Text textTransform="uppercase">Resultado</Typo.Text>
                  <Typo.Text variant="tinted">
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      data.data?.snapshotByPortfolio.equityProfit
                    )}
                  </Typo.Text>
                </Box>
              </Box>
            </Card>
            <Card>
              <Box justifyContent="flex-start" alignItems="center">
                <div className={styles.highlightBar} />
                <Box flexDirection="column" alignItems="flex-start">
                  <Typo.Text textTransform="uppercase">Rentabilidade</Typo.Text>
                  <Typo.Text variant="tinted">
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      data.data?.snapshotByPortfolio.percentageProfit
                    )}
                  </Typo.Text>
                </Box>
              </Box>
            </Card>
            <Card>
              <Box justifyContent="flex-start" alignItems="center">
                <div className={styles.highlightBar} />
                <Box flexDirection="column" alignItems="flex-start">
                  <Typo.Text textTransform="uppercase">cdi</Typo.Text>
                  <Typo.Text variant="tinted">
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      data.data?.snapshotByPortfolio.indexerValue
                    )}
                  </Typo.Text>
                </Box>
              </Box>
            </Card>
            <Card>
              <Box justifyContent="flex-start" alignItems="center">
                <div className={styles.highlightBar} />
                <Box flexDirection="column" alignItems="flex-start">
                  <Typo.Text textTransform="uppercase">% sobre cdi</Typo.Text>
                  <Typo.Text variant="tinted">
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      data.data?.snapshotByPortfolio.percentageOverIndexer
                    )}
                  </Typo.Text>
                </Box>
              </Box>
            </Card>
          </div>
          <Card height="348px" padding="8px 12px">
            <Typo.Title variant="h2">Rentabilidade dos Títulos</Typo.Title>
            <YieldChart />
          </Card>
          <div className={styles.fixedIncomeContainer}>
            <Card padding="6px 19px 16px">
              <div className={styles.myFixedIcomesCardHeader}>
                <Typo.Title variant="h2">Minhas Rendas Fixas</Typo.Title>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Select
                    margin="0 8px"
                    options={[
                      { label: "Nome", value: "name" },
                      { label: "Data Venc.", value: "duedate" },
                    ]}
                    defaultLabel="Ordernar por"
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  />
                  <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    icon={searchIcon}
                    placeholder="Pesquisar"
                  />
                </div>
              </div>
              {isLoading ? (
                <Typo.Text>Carregando...</Typo.Text>
              ) : (
                <div className={styles.myFixedIcomesListContainer}>
                  <PaginatedList
                    data={filteredProducts.slice((page - 1) * 5, page * 5)}
                    page={page}
                    perPage={5}
                    onPageChange={setPage}
                    total={filteredProducts.length}
                    renderItem={(product) => (
                      <div
                        key={product.fixedIncome.portfolioProductId}
                        className={styles.myFixedIcomesList}
                      >
                        <Box>
                          <Card width="100%" variant="outline">
                            <Box margin="0 0 10px">
                              <Typo.Text textTransform="uppercase">
                                Título
                              </Typo.Text>
                            </Box>
                            <Box justifyContent="space-between">
                              <Box flexBasis="100%">
                                <Typo.Text fontSize={14}>
                                  {product.fixedIncome.name}
                                </Typo.Text>
                              </Box>
                              <Box
                                flexBasis="100%"
                                flexDirection="column"
                                margin="0 8px"
                              >
                                <Typo.Text textTransform="uppercase">
                                  Classe
                                </Typo.Text>
                                <Typo.Text fontSize={16} color="#4C309B">
                                  Tesouro Direto
                                </Typo.Text>
                              </Box>
                            </Box>
                          </Card>
                        </Box>
                        <FixedIncomeCard
                          title="Minha Posição"
                          details={[
                            {
                              label: "Valor Inves.",
                              value: product.position.valueApplied,
                            },
                            {
                              label: "Saldo Bruto",
                              value: product.position.equity,
                            },
                            {
                              label: "Rent.",
                              value: product.position.profitability,
                            },
                            {
                              label: "% da Cart.",
                              value: product.position.portfolioPercentage,
                            },
                            {
                              label: "CDI",
                              value: product.position.indexerValue,
                            },
                            {
                              label: "Sobre CDI",
                              value: product.position.percentageOverIndexer,
                            },
                          ]}
                          defaultTintColor="#38BFA0"
                        />
                        <FixedIncomeCard
                          title="Vencimento"
                          details={[
                            { label: "Data Venc.", value: product.due.date },
                            {
                              label: "Dias Até Venc.",
                              value: product.due.daysUntilExpiration,
                            },
                          ]}
                          defaultTintColor="#008DCB"
                        />
                      </div>
                    )}
                  />
                </div>
              )}
            </Card>
          </div>
          <div className={styles.portfolioChartsContainer}>
            <Card height="448px">
              <Typo.Title variant="h2">
                Divisão de Carteira por Tipos
              </Typo.Title>
              <ProductEquityChart
                productEquities={productEquities}
                pieChartColors={pieChartColors}
              />
            </Card>
            <Card height="448px">
              <Typo.Title variant="h2">
                Divisão de Carteira por Título
              </Typo.Title>
              <ProductTypeChart
                productTypes={productTypes}
                pieChartColors={pieChartColors}
              />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
