import { Box, Heading, Container } from '@chakra-ui/react';
import PostList from './components/PostList.jsx';

function App() {
  return (
    // Box component'ini tüm sayfayı kaplayan bir konteyner olarak kullanıyoruz
    <Box bg="gray.800" color="white" minH="100vh" p={8}>
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" mb={8} color="cyan.300" textAlign="center">
          Chakra UI ile API'dan Veri Çekme
        </Heading>
        <PostList />
      </Container>
    </Box>
  );
}

export default App;