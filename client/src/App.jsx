import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as tokenLoader} from './pages/Root.jsx';
import FoodMenuPage, { loader as FoodMenuLoader } from './pages/FoodMenuPage.jsx';
import DiscountPage from './pages/DiscountPage.jsx';
import BookPartyPage from './pages/BookParty.jsx';
import FoodItemDetailPage, { loader as FoodItemDetailLoader } from './pages/FoodItemDetailPage';
import EditProductPage, { loader as EditProductLoader } from './pages/EditProductPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { action as LogoutAction } from './pages/LogoutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    id: 'root',
    children: [
      {
        index: true,
        element: <FoodMenuPage />,
        loader: FoodMenuLoader
      },
      {
        path: 'menu/:foodId',
        element: <FoodItemDetailPage />,
        loader: FoodItemDetailLoader,
      },
      {
        path: 'menu/:foodId/edit',
        element: <EditProductPage />,
        loader: EditProductLoader
      },
      {
        path: 'deals',
        element: <DiscountPage />,
      },
      {
        path: 'book-a-party',
        element: <BookPartyPage />,
      },
      {
        path: 'account',
        element: <AuthPage/>
      },
      {
        path: 'logout',
        action: LogoutAction
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
