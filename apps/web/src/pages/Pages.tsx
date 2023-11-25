import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './HomePage.jsx';
import { PageRoot } from '@a-type/ui/components/layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export function Pages() {
  return (
    <PageRoot>
      <RouterProvider router={router} />
    </PageRoot>
  );
}
