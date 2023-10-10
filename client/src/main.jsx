import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ModalProvider from './store/ModalProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
)
