import { Suspense, lazy, ElementType } from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import LoadingScreen from "../components/LoadingScreen";



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

  const router = createBrowserRouter([

    {
      path: '*',
      children: [
        {
          path: '',
          element: <Dashboard  />,
        },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'projekte', element: <Projekte /> },
        { path: 'ausbildung', element: <Ausbildung /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));
const Projekte = Loadable(lazy(() => import('../pages/Projects')));
const Ausbildung = Loadable(lazy(() => import('../pages/Education')));


