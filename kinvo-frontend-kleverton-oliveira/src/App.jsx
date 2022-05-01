import { Box, Flex, Grid, Heading, Spinner } from '@chakra-ui/react';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useMainContext } from './context/mainContext';

function App() {

  const {isLoading} = useMainContext();

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
      <Flex>
        <Sidebar />
        <MainContent />
      </Flex>
    </Box>
  )
}

export default App
