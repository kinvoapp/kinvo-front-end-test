import type { NextPage } from 'next'
import Header from '../src/components/Header';

import { Box, Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import { SidebarNav } from '../src/components/Siderbar/siderBarNav';
import Card from '../src/components/Siderbar/cardHender';
import { useFeatch } from '../src/hooks/useFeatch';
import MyLace from '../src/components/Siderbar/myLace';
import Graphic from '../src/components/Siderbar/graphic';

import { useQuery } from 'react-query'
import axios from 'axios';
import GraphicBol from '../src/components/Siderbar/graphicBol';



interface snapshotByPortfolioProps {
  equity: number
  equityProfit: number
  indexerValue: number
  percentageOverIndexer: number
  percentageProfit: string
  valueApplied: number
}


const Home: NextPage = () => {


  const { data } = useQuery<snapshotByPortfolioProps>('list', async () => {
    const response = await axios.get('https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData')

    return response
  })
  const value = data?.data.data.snapshotByPortfolio

  return (

    <Box>

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Grid
          templateAreas={`
                  "nav main"`}
          gridTemplateRows={'1fr'}
          gridTemplateColumns={'13rem 1fr'}

          w="100%"
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >

          <GridItem pl='2' bg='white' area={'nav'}>
            <SidebarNav />
          </GridItem>
          <GridItem pl='2' bg='#EEF2F4' area={'main'}>
            <Box padding='3rem 1rem'>
              <Text textColor='#4C309B'>
                Renda fixas
              </Text>
            </Box>

            <Flex w='100%' justifyContent='space-between' paddingRight='1rem'>
              <Card title={'saldo bruto'} money={value?.equity} />
              <Card title={'valor aplicado'} money={value?.equityProfit} />
              <Card title={'resultado'} money={value?.indexerValue} />
              <Card title={'Rentabilidade'} money={value?.percentageOverIndexer} />
              <Card title={'CDI'} money={value?.valueApplied} />
              <Card title={'% sobre CDI'} money={value?.percentageProfit} />

            </Flex>
            <Graphic />
            <MyLace />
            <GraphicBol />
          </GridItem>
        </Grid>
      </Flex>
    </Box >
  )
}

export default Home
