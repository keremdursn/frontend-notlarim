import { useState } from 'react';

function ToggleContent() {
  // İçeriğin görünür olup olmadığını tutan state
  const [isVisible, setIsVisible] = useState(false);

  // Butona tıklandığında state'i tersine çeviren fonksiyon
  const handleToggle = () => {
    setIsVisible(!isVisible); // true ise false, false ise true yapar
  };

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <button onClick={handleToggle}>
        {/* Yöntem 2: Ternary Operatör ile buton yazısını değiştir */}
        {isVisible ? 'İçeriği Gizle' : 'İçeriği Göster'}
      </button>

      {/* Yöntem 3: && Operatörü ile içeriği göster/gizle */}
      {isVisible && (
        <div style={{ marginTop: '15px' }}>
          <h4>İşte Gizli İçerik!</h4>
          <p>
            Bu alan, state'in `true` olmasına bağlı olarak render ediliyor.
          </p>
        </div>
      )}
    </div>
  );
}

export default ToggleContent;