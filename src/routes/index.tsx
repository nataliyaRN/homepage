import { Suspense, lazy, ElementType } from 'react';
import { createBrowserRouter, Navigate, RouterProvider, useLocation } from 'react-router-dom';
import LoadingScreen from "../components/LoadingScreen";
import {PATH_HOMEPAGE} from "./paths";


const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const isDashboard = pathname.includes('/') ;

  return (
    <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const queryParams = new URLSearchParams(window.location.search);

  const router = createBrowserRouter([

    {
      path: '*',
      children: [
        {
          path: '',
          element: <Dashboard  />,
        },
        { path: 'ausbildung', element: <Dashboard /> },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));


