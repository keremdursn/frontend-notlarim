import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch'; // 1. Custom hook'u import et
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
function PostDetailPage() {


  // 1. useParams hook'unu çağırarak URL parametrelerini al
  const { postId } = useParams();

  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box>
      {post && ( // data'nın null olmadığı durumu kontrol et
        <>
          <Typography variant="h4" gutterBottom>{post.title}</Typography>
          <Typography variant="body1">{post.body}</Typography>
        </>
      )}
    </Box>
  );
}

export default PostDetailPage;