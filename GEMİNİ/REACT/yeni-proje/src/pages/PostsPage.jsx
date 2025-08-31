import PostList from '../components/PostList'; // Dikkat: component'ler klasöründen import ediyoruz.
import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function PostsPage() {
  return (
    <Box>
      <Button
        component={RouterLink}
        to="/posts/new"
        variant="contained"
        sx={{ mb: 2 }}
      >
        Yeni Post Ekle
      </Button>
      <PostList />
    </Box>
  );
}

export default PostsPage;