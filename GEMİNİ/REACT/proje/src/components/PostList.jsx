import { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]); // Gelen postları tutacak state
  const [loading, setLoading] = useState(true); // Yüklenme durumunu tutacak state
  const [error, setError] = useState(null); // Hata durumunu tutacak state

  useEffect(() => {
    // Kural 2: Boş bağımlılık dizisi [], bu effect'in sadece ilk render'da çalışmasını sağlar.
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        if (!response.ok) {
          throw new Error('Veri çekilirken bir hata oluştu.');
        }
        const data = await response.json();
        setPosts(data); // Gelen veriyi state'e yaz
      } catch (err) {
        setError(err.message); // Hata olursa state'e yaz
      } finally {
        setLoading(false); // Her durumda (başarılı veya hatalı) yüklenme durumunu bitir
      }
    };

    fetchPosts(); // Tanımladığımız asenkron fonksiyonu çalıştır
  }, []); // <-- Boş Dizi

  // Koşullu Render Etme
  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>Hata: {error}</p>;
  }

  return (
    <div>
      <h2>Post Listesi</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
