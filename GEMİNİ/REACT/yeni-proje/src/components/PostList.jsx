import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  List,
  ListItem,
  Card,
  CardContent,
  Alert
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // 1. RouterLink'i import et
import { CardActionArea } from '@mui/material'; // 2. Kartı tıklanabilir yapmak için

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ... (veri çekme mantığı aynı kalıyor)
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        if (!response.ok) {
          throw new Error('Veri çekilirken bir hata oluştu.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Yüklenme durumu için JSX
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // Hata durumu için JSX
  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 4 }}>
        Hata: {error}
      </Alert>
    );
  }

  // Başarılı veri çekme durumu için JSX
  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id} disablePadding sx={{ mb: 2 }}>
          {/* 3. Card'ı RouterLink ve CardActionArea ile sarmala */}
          <Card variant="outlined" sx={{ width: '100%' }}>
            <CardActionArea component={RouterLink} to={`/posts/${post.id}`}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {post.id}. {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}

export default PostList;
