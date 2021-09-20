import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router';
import { MainLayout, PageLoader } from 'components';

const Loadable = (Component: React.ElementType) => (props: any) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

const Router = () => {
  const defaultRoots = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" replace /> },
      { path: '/', element: <Landing /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'contact', element: <Contact /> },
      { path: 'farms', element: <Farms /> },
      { path: 'info', element: <Info /> },
      { path: 'owners', element: <Owners /> },
      { path: '404', element: <NotFound /> }
    ]
  };

  //   TO FILL WHEN DEVELOP DASHBOARD
  //   const dashboardRoutes = {
  //     path: '/',
  //     element: <DashboardLayout />,
  //     children: [
  //       { path: '*', element: <Navigate to="/404" /> },
  //       { path: '/', element: <Home /> },
  //       { path: '404', element: <NotFound /> }
  //     ]
  //   };

  return useRoutes([defaultRoots]);
};

const Calendar = Loadable(lazy(() => import('../views/Calendar')));
const Contact = Loadable(lazy(() => import('../views/Contact')));
const Farms = Loadable(lazy(() => import('../views/Farms')));
const Info = Loadable(lazy(() => import('../views/Info')));
const Landing = Loadable(lazy(() => import('../views/Landing')));
const NotFound = Loadable(lazy(() => import('../views/NotFound')));
const Owners = Loadable(lazy(() => import('../views/Owners')));

export default Router;
