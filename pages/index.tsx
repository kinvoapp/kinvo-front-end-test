import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/styles/theme";
import { Navbar } from "../src/components/interface/Navbar";
import { Sidebar } from "../src/components/interface/Sidebar";
import { MainContent } from "../src/components/interface/MainContent";
import { Text } from "../src/components/base/Text";
import { Flex } from "../src/components/base/Flex";
import { FixedIncomeCards } from "../src/components/sections/index_page/FixedIncomeCards";

import {
  getFixedIncome,
  FixedIncomeAPIResponse,
} from "../src/data/fixed_income";
import { MyFixedIncomes } from "../src/components/sections/index_page/MyFixedIncomes";

import { FixedIncomeProvider } from "../src/hooks/FixedIncomeContext";

interface HomeProps {
  fixedIncomeInfo: FixedIncomeAPIResponse;
  children?: React.ReactNode;
}

const Home: NextPage<HomeProps> = ({ fixedIncomeInfo }) => {
  return (
    <>
      <Head>
        <title>Kinvo Premium</title>
        <meta
          name="description"
          content="Teste para a vaga de desenvolvedor front-end do Kinvo. Desenvolvido por Thales B. Rodrigues."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme.light}>
        <FixedIncomeProvider value={fixedIncomeInfo}>
          <Flex direction="column" minHeight="100vh">
            <Navbar />
            <Flex grow direction="row" align="stretch">
              <Sidebar />
              <MainContent>
                <Text variant="title" color="primary">
                  Renda fixa
                </Text>
                <Flex
                  wrap
                  direction="row"
                  justify="space-between"
                  gap={1}
                  marginBottom={1}
                >
                  <FixedIncomeCards />
                </Flex>
                <MyFixedIncomes />
              </MainContent>
            </Flex>
          </Flex>
        </FixedIncomeProvider>
      </ThemeProvider>
    </>
  );
};

export async function getServerSideProps() {
  const fixedIncome = await getFixedIncome();

  const returnValue: {
    props: HomeProps;
  } = {
    props: {
      fixedIncomeInfo: fixedIncome,
    },
  };

  return returnValue;
}

export default Home;
