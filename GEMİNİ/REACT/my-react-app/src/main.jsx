import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. ChakraProvider'ı import et
import { ChakraProvider } from '@chakra-ui/react'

// 2. Varsa eski index.css import'unu silebilirsin, artık ona ihtiyacımız yok
// import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. App component'ini ChakraProvider ile sarmala */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)