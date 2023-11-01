import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader} from './pages/Root.jsx';
import FoodMenuPage, { loader as FoodMenuLoader } from './pages/FoodMenuPage.jsx';
import DiscountPage from './pages/DiscountPage.jsx';
import BookPartyPage from './pages/BookParty.jsx';
import FoodItemDetailPage, { loader as FoodItemDetailLoader } from './pages/FoodItemDetailPage';
import EditProductPage, { loader as EditProductLoader } from './pages/EditProductPage.jsx';
import AuthPage, { loader as AuthLoader } from './pages/AuthPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import { action as LogoutAction } from './pages/LogoutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
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
        children: [
          {
            index: true,
            element: <AuthPage/>,
            loader: AuthLoader,
          },
          {
            path: 'profile',
            element: <ProfilePage/>,
          }
        ]
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
