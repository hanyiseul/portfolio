import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../NotFoundPage';
import Main from '../pages/Main';
import ButtonGuide from '../\bguide/Button';

const routes = createBrowserRouter([
  {
    path: '/',
    // 참고: https://stackabuse.com/redirects-in-react-router/
    // 참고: https://devalice.tistory.com/112
    element: <Navigate to="/pages/Main" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/pages',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <Navigate to="main" />,
      },
      {
        path: 'main',
        element: <Main />,
      },
      {
        path: 'productList',
        element: <Main />,
      },
    ],
  },
  {
    path: '/guide',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <Navigate to="button" />,
      },
      {
        path: 'button',
        element: <ButtonGuide />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <NotFoundPage />,
  },
]);

export default routes;
