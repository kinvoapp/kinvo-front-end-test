import { Box, Flex, Grid, Heading, Spinner } from '@chakra-ui/react';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useApiDataContext } from './context/apiDataContext';

function App() {

  const {isLoading} = useApiDataContext();

  if(isLoading) {
    return (
      <Grid minH='100vh' bg={'brand.background'} placeItems={'center'}>
        <Flex alignItems={'center'} gap={'2rem'}>
          <Heading color={'brand.darkPurple'}>Loading...</Heading>
          <Spinner color={'brand.darkPurple'} size='lg'/>
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
