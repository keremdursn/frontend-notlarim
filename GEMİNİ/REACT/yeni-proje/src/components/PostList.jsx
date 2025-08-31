import useFetch from '../hooks/useFetch';
import { Box, List, ListItem, Card, CardContent, Typography, CircularProgress, Alert, CardActionArea } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'; // 1. RouterLink'i import et


function PostList() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  // Başarılı veri çekme durumu için JSX
  return (
    <List>
       {posts && posts.map((post) => (
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
