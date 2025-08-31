import { useState } from 'react'; // 1. Adım: useState'i import et

function Counter() {
  // 2. Adım: state'i 0 başlangıç değeriyle tanımla
  const [count, setCount] = useState(0);

  // Butona tıklandığında çalışacak fonksiyonlar
  const increment = () => {
    // 3. Adım: state'i güncellemek için setter fonksiyonunu kullan
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2>Sayaç Değeri: {count}</h2>
      <button onClick={increment} style={{ marginRight: '10px' }}>Arttır</button>
      <button onClick={decrement}>Azalt</button>
    </div>
  );
}

export default Counter;