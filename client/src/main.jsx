import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CartProvider from './store/CartProvider.jsx'
import AddProductFormProvider from './store/AddProductFormProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AddProductFormProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AddProductFormProvider>
  </React.StrictMode>,
)
