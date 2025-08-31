import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Router'ı import et
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> {/* 2. App component'ini sarmala */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
