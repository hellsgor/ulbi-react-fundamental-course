import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '.';

export const AppRouter = () => (
  <Routes>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.redirect ? (
            <Navigate to={route.redirect.to} replace={route.redirect.replace} />
          ) : route.component ? (
            <route.component />
          ) : undefined
        }
      />
    ))}
  </Routes>
);
