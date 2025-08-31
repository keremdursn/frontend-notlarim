import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Card, CardContent, CircularProgress, Alert } from '@mui/material';

function NewPostPage() {
  // 1. Form inputları için state'ler oluştur
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Yüklenme durumu için state
  const [error, setError] = useState(null); // Hata durumu için state
  const navigate = useNavigate(); // 2. useNavigate'i çağır

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const newPost = {
      title: title,
      body: body,
      userId: 1, // JSONPlaceholder API'ı post oluşturmak için bir userId bekler
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost), // Göndereceğimiz veriyi JSON string'ine çevir
        headers: {
          'Content-type': 'application/json; charset=UTF-8', // Gönderdiğimiz verinin tipini belirt
        },
      });

      if (!response.ok) {
        throw new Error('Post oluşturulurken bir sunucu hatası oluştu.');
      }

      const createdPost = await response.json();
      console.log('Sunucudan Gelen Cevap:', createdPost);
      
      alert('Yeni post başarıyla oluşturuldu!');

      // 3. Başarılı gönderimden sonra kullanıcıyı post listesi sayfasına yönlendir
      navigate('/posts');

    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false); // İşlem bitince yüklenme durumunu kapat
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Yeni Post Oluştur</Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Post Başlığı"
              variant="outlined"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isSubmitting} // Gönderim sırasında input'u kilitle
            />
            <TextField
              label="Post İçeriği"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              disabled={isSubmitting} // Gönderim sırasında input'u kilitle
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              sx={{ mt: 2 }}
              disabled={isSubmitting} // Gönderim sırasında butonu kilitle
            >
              {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Gönder'}
            </Button>
          </form>
        </CardContent>
      </Card>
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
    </Box>
  );
}

export default NewPostPage;