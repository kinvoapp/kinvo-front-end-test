import { Box, Flex, Grid, Heading, Spinner } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import useDataFetch from './hooks/useDataFetch';

function App() {

  const {isLoading} = useDataFetch();

  if(isLoading) {
    return (
      <Grid minH='100vh' bg={'brand.background'} placeItems={'center'}>
        <Flex alignItems={'center'} gap={'2rem'}>
          <Heading>Loading...</Heading>
          <Spinner />
        </Flex>
      </Grid>
    )
  }
  

  return (
    <Box minH='100vh' bg={'brand.background'}>
      <Navbar />
    </Box>
  )
}

export default App
