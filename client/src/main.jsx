import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import store from './store/store.js';
import { Provider } from 'react-redux'
// import CartProvider from './store/CartProvider.jsx'
// import AddProductFormProvider from './store/AddProductFormProvider.jsx'
import './index.css'

import Root from './pages/Root.jsx';
import HomePage from './pages/HomePage.jsx';
import DiscountPage from './pages/DiscountPage.jsx';
import BookPartyPage from './pages/BookParty.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'discount',
        element: <DiscountPage />
      },
      {
        path: 'book-party',
        element: <BookPartyPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} >
          <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
)
