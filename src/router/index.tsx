import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import ComingSoon from '@/pages/ComingSoon/ComingSoon';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <ComingSoon />,
  },
  {
    path: '/services',
    element: <ComingSoon />,
  },
  {
    path: '/pricing',
    element: <ComingSoon />,
  },
  {
    path: '*',
    element: <ComingSoon />,
  },
]);
