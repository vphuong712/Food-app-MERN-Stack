import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root.jsx';
import FoodMenuPage from './pages/FoodMenuPage.jsx';
import DiscountPage from './pages/DiscountPage.jsx';
import BookPartyPage from './pages/BookParty.jsx';
import FoodItemDetailPage from './pages/FoodItemDetailPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <FoodMenuPage />,
      },
      {
        path: 'menu/:foodId',
        element: <FoodItemDetailPage />,
      },
      {
        path: 'deals',
        element: <DiscountPage />,
      },
      {
        path: 'book-a-party',
        element: <BookPartyPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
