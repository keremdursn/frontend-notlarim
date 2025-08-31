import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Her effect'in kendi içinde async bir fonksiyon tanımlaması en iyi pratiktir.
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Effect, URL prop'u değiştiğinde yeniden çalışacak

  // Hook'un dışarıya döndürdüğü değerler
  return { data, loading, error };
}

export default useFetch;