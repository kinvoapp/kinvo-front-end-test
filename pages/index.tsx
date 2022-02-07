import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import { useState, createContext, Context } from "react";

import { theme } from "../src/styles/theme";
import { Navbar } from "../src/components/Navbar";
import { Sidebar } from "../src/components/Sidebar";
import { MainContent } from '../src/components/MainContent';
import { Text } from "../src/components/Text";
import { Flex } from "../src/components/Flex";
import { Card } from "../src/components/Card";
import { FixedIncomeCards } from "../src/components/FixedIncomeCards";

import { getFixedIncome, FixedIncomeAPIResponse } from "../src/data/fixed_income";
import { MyFixedIncomes } from "../src/components/MyFixedIncomes";

import { FixedIncomeProvider } from "../src/hooks/FixedIncomeContext";

interface HomeProps {
  fixedIncomeInfo: FixedIncomeAPIResponse,
  children?: React.ReactNode
}

const Home: NextPage<HomeProps> = ({ fixedIncomeInfo }) => {
  return (
    <>
      <Head>
        <title>Kinvo Premium</title>
        <meta name="description" content="Teste para a vaga de desenvolvedor front-end do Kinvo. Desenvolvido por Thales B. Rodrigues." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme.light}>
        <FixedIncomeProvider value={fixedIncomeInfo}>
          <Flex direction="column" minHeight="100vh">
            <Navbar />
            <Flex grow direction="row" align="stretch">
              <Sidebar />
              <MainContent>
                <Text variant="title" color="primary">Renda fixa</Text>
                <Flex direction="row" justify="space-between" gap={1} marginBottom={1}>
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
    props: HomeProps
  } = {
    props: {
      fixedIncomeInfo: fixedIncome
    }
  }

  return returnValue;
}

export default Home;
