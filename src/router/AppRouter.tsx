import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '.';
import Error from '../pages/Error';

export const AppRouter = () => {
  const isAuth = false;

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            !isAuth && route.path !== '/login' ? (
              <Navigate to={'/login'} replace />
            ) : route.component ? (
              <route.component />
            ) : undefined
          }
        />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
