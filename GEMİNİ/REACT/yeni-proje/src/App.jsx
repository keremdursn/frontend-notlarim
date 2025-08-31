import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navbar from './components/Navbar'; // 1. Navbar'ı import et
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';
import NewPostPage from './pages/NewPostPage';
import { AuthContext } from './context/AuthContext';


function App() {
  // Paylaşmak istediğimiz global veri (örneğin giriş yapmış kullanıcı)
  const currentUser = {
    name: 'Kerem',
    email: 'kerem@example.com'
  };

  return (
    <AuthContext.Provider value={currentUser}>
      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Navbar /> {/* 2. Navbar'ı Routes'un dışına, en üste yerleştir */}

      <Container sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/new" element={<NewPostPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
        </Routes>
      </Container>
    </Box>
    </AuthContext.Provider>
    
  );
}

export default App;