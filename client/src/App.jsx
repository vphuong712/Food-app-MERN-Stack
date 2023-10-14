import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root.jsx';
import FoodMenuPage, { loader as FoodMenuLoader } from './pages/FoodMenuPage.jsx';
import DiscountPage from './pages/DiscountPage.jsx';
import BookPartyPage from './pages/BookParty.jsx';
import FoodItemDetailPage, { loader as FoodItemDetailLoader } from './pages/FoodItemDetailPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <FoodMenuPage />,
        loader: FoodMenuLoader
      },
      {
        path: 'menu/:foodId',
        element: <FoodItemDetailPage />,
        loader: FoodItemDetailLoader
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
