import { Navigate, Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import { routes } from '.';
import { useAuth } from '../hooks/useAuth';
import { Loader } from '../components/UI/Loader/Loader';

export const AppRouter = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return (
      <section>
        <div className="container">
          <div className="sectionWrapper">
            <Loader />
          </div>
        </div>
      </section>
    );
  }

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
