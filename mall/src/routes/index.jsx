import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../NotFoundPage';
import Main from '../pages/Main';
import ButtonGuide from '../guide/Button';

const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to="/pages/main" />,
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
  ],
  {
    future: {
      v7_startTransition: true, // React v7 스타일 미리 적용
      v7_relativeSplatPath: true, // 스플랫 경로 해석 방식 변경 적용
    },
  }
);

export default routes;
